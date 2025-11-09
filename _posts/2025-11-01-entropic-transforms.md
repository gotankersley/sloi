---
layout: post
title:  "Entropic Transforms"
date:   2025-11-01 11:39:55 -0600
tags: xn entropy entropic-transform
thumb: /sloi/img/xn/entropic.png
no-border: true
caption: Set Shaping Theory
project-link: /entropic-transform
---

# Entropic Transforms
An entropic transform is method used in various types of compression in order to change the initial entropy of a message in the hopes that the transformed 
message will be easier to compress, or have some other desirable properties.<!--more-->

The Burrows-Wheeler Transform is one such fascinating example, (and is used in the BZIP format!)  However, a newer, and lesser known example, is "Set-Shaping-Theory", which uses some "Bijective Function" to accomplish the entropic transform.  (See <a target="_blank" href="https://sochima.me/set-shaping-theory">this page</a>, and <a href="https://levelup.gitconnected.com/shannon-theory-vs-set-shaping-theory-14dfb966666c" target="_blank">this page</a> for a helpful introduction)

Despite being the new kid on the compression block, Set-Shaping-Theory has some pretty big potential for pushing the existing boundaries of compression with regards to what it can do with random data.

Unfortunately, though, Set-Shaping-Theory being a theory, this means that it leaves the actual specification of the bijective function as "an exercise for the reader" ... which is what the rest of this post is about.
<br>
<br>
<br>

## What? 
For small messages, we can just use a table to store all possible sorted messages in a table, and look them up that way.
However, the problem is that for large messages we can't just sort them all first and look them up - there's way too many of them.  But, what we can do is use a neat idea from combinatorics where we rank all possible sequences in order from those with the least amount of entropy to those with the greatest, and find our transformed sequence that way, without having to calculate all the intermediate sequences.

But, while that's easy enough to say, actually implementing this is quite tricky, and while the following describes a method for ordering that is near entropic, note that it is only an approximation, and diverges from the real entropic order.

The ordering of this approximation algorithm can be explicitly stated based on the repetitions of distinct characters, sorted by reverse integer-partition order.

For example, here are some sequences and the repeat patterns they have:
<pre>
CABAC - two 'C', two 'A's, one 'B'           =  repeat pattern [2,2,1]
EBDAA - one 'E', one 'B', one 'D', two 'A's  =  repeat pattern [2,1,1,1]
AEDBB - one 'A', one 'E', one 'D', two 'B's  = repeat pattern  [2,1,1,1]
</pre>
These repeat patterns must sum up to the total sequence length, (which in this case is 5).  Thus, the total possible repeat patterns that are available must be the integer-partitions of 5, which are as follows:
<pre>
5
4+1
3+2
3+1+1
2+2+1
2+1+1+1
1+1+1+1+1
</pre>
This is the order that the algorithm will use for all sequences.  This means that all sequences with a repeat pattern of [5], (e.g. BBBBB) will come before all sequences with a repeat pattern of [4,1], (e.g. ABBBB, BBBBA, CCACC, etc...)


For more specifics on the order, see <a href="https://www.desmos.com/calculator/8iv9axg8zu" target="_blank">this Desmos graph</a> and the spreadsheets in the <a href="https://github.com/gotankersley/entropic-transform/tree/main/data" target="_blank">data folder</a>, especially the Entropy column, where you can see, for example, that CCDD (entropy 4.0) is ranked before BABB (entropy 3.25), but that each sequence that has only two distinct symbols is going to have less entropy than all the sequences with three distinct symbols, etc..

Finally, there are lots of sequences that have identical entropy, so for Set Shaping Theory bijection purposes, once a sequence is ranked in (near) entropic order, it doesn't really matter what order the sequences come in, so I've just chosen an order that uniquely identifies them.
<br>
<br>
<br>


## How - (Advanced Counting)
The following an overview of how it works that is stated in a way to try to put it into the combinatorial language of ranking and unranking.  

Given a message and a certain sized alphabet, we can consider it an (often large) number in a base the size of the alphabet.  We are, of course, accustomed to doing this all the time with the digits in the base-10 place value system.  (In fact, we consider the place-value representation so synonymous, we think of it as the number itself).  However, in combinatorial language, this base conversion is equivalent to ranking or counting - think of it like in ALL the possible ways to arrange the symbols of the alphabet, that given message is the 10 gazillionth, or whatever way to arrange it.  For example, the number 123 in base-10 is obviously the 123rd way to arrange an alphabet of 10 symbols.  

Now, once we have our message rank, this is where the bijection comes from, we can then equate it with the corresponding rank of all sequences sorted in entropic order, and UNRANK it to get that specific sequence.  In the example with 123, to do the entropic transform, we would find the 123rd sequence of all the sequences that are arranged in entropic order and that had an equal sized alphabet.  And, that's pretty much all there is to it.
<br>
<br>
<br>
## Code:
Code implementing this algorithm has been made available at the following GitHub repo: <a href="https://github.com/gotankersley/entropic-transform" target="_blank">https://github.com/gotankersley/entropic-transform</a>

<b>Disclaimer:</b>
First of all, the code in the implementation itself is, of course, proof-of-concept code, and is not at all optimized, (i.e. written in Python), but could easily be converted to a native solution, (i.e. written in C/C++), which probably would result in a modest 10x speedup.  
(Which, to be fair, depending on intended usage, may be an irrelevant speed increase).

For further algorithmic optimization, the bottleneck here is probably calculating the Stirling numbers and the associated feasibility of generating large ones.  However, there are asymptotic approximations for large Stirling numbers, and some initial testing seems to indicate that it could potentially scale more, but this remains to be done.
<br>
<br>
<br>


## Example:
See this <a href="https://gotankersley.github.io/entropic-transform" target="_blank">online tool</a> which shows a comparison of some Entropic Transforms in action.
<br>
<br>
<br>


---
Note 1: The origins of Set-Shaping-Theory appear to go back to John Kendall Dixon

Note 2: While looking for existing algorithms, I found some example MatLab code which has the opaque fSSTt.p compiled MatLab functions, but has no explanation of how it worked aside from this comment by one of the co-authors Christian Schmidt that claimed "such a transformation is essentially a topology problem".  So, I don't know what they were doing, but the way I implemented this is a combinatorial solution instead.

Note 3: For measuring Entropy, I'm using the function defined by Sochima Biereagu

Note 4: For the BWT Transform, I'm using the bijective BWTS variant for comparison