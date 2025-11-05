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
message will be easier to compress, or have some other desirable properties.

The Burrows-Wheeler Transform is one such fascinating example, (and is used in the BZIP format!)  However, a newer, and lesser known example,
<!--more-->, is "Set-Shaping-Theory", which uses some "Bijective Function" to accomplish the entropic transform.  (See <a href="https://sochima.me/set-shaping-theory">this page</a> for a helpful introduction)

Despite being the new kid on the block, Set-Shaping-Theory has some pretty big potential for pushing the existing boundaries of compression with regards to random data.

Although, unfortunately, Set-Shaping-Theory being a theory, it means that it leaves the actual specification of the bijective function as "an exercise for the reader", which is what the rest of this post is about.

## What? 
For small messages, we can just use a table to store all possible sorted messages in a table, and look them up that way.
However, the problem is that for large messages we can't just sort them all first and look them up - there's way too many of them.  But, what we can do is use a neat idea from combinatorics where we rank all possible sequences in order from those with the least amount of entropy to those with the greatest, and find our transformed sequence that way, without having to calculate all the intermediate sequences.

But, while that's easy enough to say, I did find out that actually implementing this was rather tricky, (at least for me).  So much so, that I ended up making three separate attempts at it.
1. With the the first approach, I found a way that is technically correct, but unfortunately I ran into the obstacle that for anything beyond the smallest alphabets of symbols, it quickly became unusably slow due to the amount of integer partitions it had to process.

2. With the second approach, I ended up implementing it a different way, that while good, does not have exact entropic order within a alphabet count section, but is quite a bit faster.  This second method is what I'm calling "near entropic" order.  

3. For the final approach, I found a way to modify the previous method so that the ranking is fully entropic, and can handle "reasonably" large messages and alphabets. 

For more specifics on the order, see the spreadsheets in the data folder, especially the Entropy column, where you can see, for example, that CCDD (entropy 4.0) is ranked before BABB (entropy 3.25), but that each sequence that has only two distinct symbols is going to have less entropy than all the sequences with three distinct symbols, etc..

Finally, there are lots of sequences that have identical entropy, so for Set Shaping Theory bijection purposes, once a sequence is ranked in (near) entropic order, it doesn't really matter what order the sequences come in, so I've just chosen an order that uniquely identifies them.


## How - (Advanced Counting)
The following an overview of how it works that is stated in a way to try to put it into the combinatorial language of ranking and unranking.  

Given a message and a certain sized alphabet, we can consider it an (often large) number in a base the size of the alphabet.  We are, of course, accustomed to doing this all the time with the digits in the base-10 place value system.  (In fact, we consider the place-value representation so synonymous, we think of it as the number itself).  However, in combinatorial language, this base conversion is equivalent to ranking or counting, like in all the possible ways to arrange the symbols of the alphabet, that given message is the 10 gazillionth, or whatever way to arrange it.  For example, the number 123 in base-10 is obviously the 123rd way to arrange an alphabet of 10 symbols.  

Now, once we have our message rank, this is where the bijection comes from, we can then equate it with the corresponding rank of all sequences sorted in entropic order, and UNRANK it to get that specific sequence.  In the example with 123, to do the entropic transform, we would find the 123rd sequence of all the sequences that are arranged in entropic order and that had an equal sized alphabet.  And, that's pretty much all there is to it.

## Code:
Code implementing this algorithm has been made available at the following GitHub repo: https://github.com/gotankersley/entropic-transform

<b>Disclaimer:</b>
First of all, the code in the implementation itself is, of course, proof-of-concept code, and is not at all optimized, (i.e. written in Python), but could easily be converted to a native solution, (i.e. written in C/C++), which probably would result in a modest 10x speedup.  
(Which, to be fair, depending on intended usage, may be an irrelevant speed increase).

For further algorithmic optimization, the bottleneck hereis probably calculating the Stirling numbers and the associated feasibility of generating large ones.  However, there are asymptotic approximations for large Stirling numbers, and some initial testing seems to indicate that it could potentially scale more, but this remains to be done.


## Example:
See this <a href="https://gotankersley.github.io/entropic-transforms">online tool</a> which shows a comparison of some Entropic Transforms in action.

---
Note 1: The origins of Set-Shaping-Theory appear to go back to John Kendall Dixon

Note 2:  While looking for existing algorithms, I found some example MatLab code which has the opaque fSSTt.p compiled MatLab functions, but has no explanation of how it worked aside from this comment by one of the co-authors Christian Schmidt that claimed "such a transformation is essentially a topology problem".  So, I don't know what they were doing, but the way I implemented this is a combinatorial solution instead.

Note 3: For measuring Entropy, I'm using the function defined by Sochima Biereagu