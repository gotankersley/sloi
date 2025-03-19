---
layout: post
title:  "Composite Mtn"
date:   2025-01-02 11:39:55 -0600
tags: fact composite
thumb: /sloi/img/fact/composite/composite.jpg
no-border: true
caption: Composite Mtn
project-link: /composite-mtn
---
Let's take a trip to Composite Mtn!  "Right, uhm, now where exactly is that?", you ask. <!--more-->

Composite

Let's get our bearings by establishing a "base-camp" conceptually that we can use to jump off into various excursions of the local scenery.

First, since we know that we are looking for any two numbers that when multiplied together equal the Factorix, we are going to graph it. *Always graph your data*


<table border="1" style="border-collapse: collapse; margin: 25px 0; font-size: 0.9em; font-family: sans-serif; min-width: 400px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);"><thead><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>2</td><td>2</td><td>4</td><td>5</td><td>6</td><td>10</td><td>12</td><td>14</td></tr><tr><td>3</td><td>3</td><td>6</td><td>9</td><td>12</td><td>15</td><td>18</td><td>21</td></tr><tr><td>4</td><td>4</td><td>8</td><td>12</td><td>16</td><td>20</td><td>24</td><td>28</td></tr><tr><td>5</td><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td><td>30</td><td>35</td></tr><tr><td>6</td><td>6</td><td>12</td><td>18</td><td>24</td><td>30</td><td>36</td><td>42</td></tr><tr><td>7</td><td>7</td><td>14</td><td>21</td><td>28</td><td>35</td><td>42</td><td>49</td></tr></tbody></table>

Specifically, we're just going to do a simple 2d loop, and show the products as the height:

{% highlight python %}
for x in range(0, factorix):
    for y in range(0, factorix):
        height = x*y;
        # plot height
        
{% endhighlight %}

<iframe src="/lib/gfx3?/../../sloi/widgets/fact/composite/composite" width="800" height="800"></iframe>

In the visualization, dubbed Composite mountain, the height somewhat poetically reminds me of a shore-line, with the water line hitting at some height...

However, it helps illustrate several important concepts:
- Symmetry along the diagonal
- Also, if we consider each line, we notice that we have 2x, 3x, 4x ... x^2
- See how it starts small (2x2 in the corner), and gets large in the opposite corner (8x8)
- See the factorix plane, and once again, for example, see 11, and how it's height hovers in between all the other ones
- Looking closer, we see that for a given factorix, there is a hyperbola visible which is the "Line of Potentiality" LOP.

For example, it's instructive to look at the highly composite number 60, and it's LOP coordinates:  2x30, 3x20, 4x15, 5x12, 6x10, 7x8

So, this isn't really groundbreaking, or anything new, but it just confirms what we already know about factors, but it does tie the geometrically to 
certain location in Composite Mountain.

Conclusion:  Finding factors is equivalent to finding lattice intersections with a "Factorix sized" hyperbolic curve.


	
So, it true that the LOP is equivalent to the algorithm for dividing the factorix x to find factors, (but from the composite mountain point of view)
Also, it explains with the diagonal line of symmetry, occuring at the sqrt(x), why you only have to search up to the sqrt(x) for factors,
and not all the way to x/2.


- Theory 1 (LOP): The LOP is the only place on Composite mountain that can possibly be a factor for the factorix.

