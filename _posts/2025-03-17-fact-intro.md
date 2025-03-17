---
layout: post
title:  "Introduction"
date:   2025-03-17 11:39:55 -0600
tags: fact composite-mtn
#thumb: 
no-border: true
caption: Composite Mtn
project-link: /fact-intro/
---
# Introduction
# Terminology & Dramatis Personnae:
In which we are introduced to some of the actors and terminology in our little drama.  
This will also help establish a "base-camp" conceptually that we can use to jump off into various excursions of the local scenery.

So, let's get our bearings:  First, since we know that we are looking for some rectangle, any rectangle of factorix sized area, let's 

Theory:  Finding factors is equivalent to finding lattice intersections with a factorix sized hyperbolic curve.

- Armed with this insight, we set out to try to understand it better to see if it can be exploited - towards this end
we shall graph it in the following way.  We shall arrange the numbers in a matrix with each cell representing the product
of the row and column.  I.e. consider a 8x8 matrix, and element[0, 6] = 2x8 = 16.  
(NOTE:  Because we are not interested in the product of 0, and 1, we start the lowest element in our Matrix with 2)

- Here is a visualization of the previous - dubbed Composite mountain  The height here represents the product of MxN
- See how it starts small (2x2 in the corner), and gets large in the opposite corner (8x8)
- Something we should notice immediately is the symmetry along the diagonal
- Also, if we consider each line, we notice that we have 2x, 3x, 4x ... x^2
- See the factorix plane, and once again, for example, see 11, and how it's height hovers in between all the other ones
- More poetically, composite mountain reminds me of a shore-line, with the water line hitting at some point
- But, looking closer, we see that for a given factorix, there is a parabola defined which is the "Line of Potentiality" LOP.

- Theory 1 (LOP): The LOP is the only place on Composite mountain that can possibly be a factor for the factorix.
It's instructive to look at the highly composite number 60, and it's LOP coordinates:  2x30, 3x20, 4x15, 5x12, 6x10, 7x8
And we see what really have here in python code:
{% highlight python %}
x = 60
for i in range(2, ceil(sqrt(x))):
	print(x/i)
{% endhighlight %}
	
So, it true that the LOP is equivalent to the algorithm for dividing the factorix x to find factors, (but from the composite mountain point of view)
Also, it explains with the diagonal line of symmetry, occuring at the sqrt(x), why you only have to search up to the sqrt(x) for factors,
and not all the way to x/2.

So, this isn't really groundbreaking, or anything new, but it just confirms what we already know about factors, but it does tie the geometrically to 
certain location in Composite Mountain.

