---
layout: post
title:  "Traversing Composite Mtn"
date:   2025-01-04 11:39:55 -0600
tags: fact composite
#thumb: /sloi/img/fact/composite/composite.jpg
no-border: true
caption: Composite Mtn
#project-link: /composite-mtn
---
This post is a continuation of <a href="/sloi/2025/01/02/composite-mtn.html">Part I - Composite Mtn<a/>.

Now that we've established what Composite Mtn is, what's the importance of it?<!--more-->

Well, it applies to factoring, but we need to flip our thinking.  So, instead of thinking of a single Factorix, instead we think about *all* the factors (i.e. Composite Mtn).

Then, the *big question* becomes:
<pre>
 Is a way to traverse Composite Mtn is ascending (monotonic) order?
</pre>

If we can find a way to traverse the heights, (i.e. products), of Composite Mtn in an orderly way, then we can find a specific height, and the coordinates of that, will be our factors.

Unfortunately, for this turns out to be something of a big if, with plenty of obstacles in the way.

First, we try the most obvious thing, and try to serialize it like you would read a book - starting in the top left, and wrapping at the end of the line.
(img of line3d).  However, when we do this, we get a series of flat mountains, and it quickly becomes apparent that this isn't ordered.
<img src="/sloi/img/fact/composite/traversal-types.png" />

Or, another way to think about this, is since we have two dimensions, it is similar to a board game domino - and so we consider, given a set of dominos,
how can we order them?  We can easily enough order them by one of the dimensions, but at the cost of having the other dimension un-ordered. We can,
of course, order them by one primary dimension, and then order by a sub-dimension under this.  But, when we do this with regards to traversal of Composite Mtn,
we get something similar to the basic serializating, which is collection of many different ordered lines, instead of a single ordered entity that we are searching for.

Let's consider the different parameters that we can tweak:
1. The height function - currently we are just using X\*Y, but as we see in the article on Conics, we could use something like X^2-Y^2
2. The traversal function
3. The dimension order itself.  For example, instead of counting by 1,2,3 etc..., we could only do the odds, or prime numbers.

However, after doing a bit of experimenting, we keep coming back to single large obstacle - the non-linarity.  Specifically, the multiplication
causes a curve of some sort, and there is not going to be an real way to match this with a linear traversal, except with some arbitrary degree of 
precision type of approximation. Also, a related problem, because we could traverse the FLOP easily enough, we need to just to specific locations

Thought experiment - if it's the curves that are giving us some trouble, then could we straighten out the curves?  See this article on Curvilinear coordinates.

