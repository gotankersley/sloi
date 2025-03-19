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
Let's take a trip to Composite Mtn!  

"Right, now, uhm where exactly is that?", you ask. <!--more-->

Well, you remember the grade-school multiplication table? (Or, maybe you've tried to forget it...)
<table border="1" style="border-collapse: collapse; margin: 25px 0; font-size: 0.9em; font-family: sans-serif; min-width: 400px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);"><thead><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>2</td><td>2</td><td>4</td><td>5</td><td>6</td><td>10</td><td>12</td><td>14</td></tr><tr><td>3</td><td>3</td><td>6</td><td>9</td><td>12</td><td>15</td><td>18</td><td>21</td></tr><tr><td>4</td><td>4</td><td>8</td><td>12</td><td>16</td><td>20</td><td>24</td><td>28</td></tr><tr><td>5</td><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td><td>30</td><td>35</td></tr><tr><td>6</td><td>6</td><td>12</td><td>18</td><td>24</td><td>30</td><td>36</td><td>42</td></tr><tr><td>7</td><td>7</td><td>14</td><td>21</td><td>28</td><td>35</td><td>42</td><td>49</td></tr></tbody></table>

Now, we know that when we are looking for factors, we are looking for any two numbers that when multiplied together equal the Factorix.  And, coincidentally, this humble table shows the result of multiplying two numbers together.

However, it's difficult to tell just from the table what is actually happening, so, we are going to graph it. *Always graph your data*

Specifically, we're just going to do a simple 2d loop, and show the products as the height:

{% highlight python %}
for x in range(0, factorix):
    for y in range(0, factorix):
        height = x*y;
        # plot height
        
{% endhighlight %}

<iframe src="/lib/gfx3?/../../sloi/widgets/fact/composite/composite" width="800" height="800"></iframe>

In this interactive visualization of Composite Mtn, the height somewhat poetically reminds me of a shore-line, with the water line hitting at some height...

However, it does help illustrate several important concepts:
- Symmetry along the diagonal
- Also, if we consider each line, we notice that we have 2x, 3x, 4x ... x^2
- On the Factorix plane, there is a hyperbola formed which is the "Line of Potentiality" LOP.
- Try a prime Factorix, e.g. 11, and see how it's height exactly equals any of the mountain blocks, because it is prime

As another example, it's instructive to look at the highly composite number 60, and it's LOP coordinates:  2x30, 3x20, 4x15, 5x12, 6x10, 7x8, which are all the factors of 60.

<img src="/sloi/img/fact/composite/desmos-plot.png" style="width:50%"/>

So, this isn't really groundbreaking, or anything new, but it can be helpful to give us a geometric intuition about factors, and gives a bit of a "base-camp" conceptually that we can use to jump off into various excursions of the local scenery.

Conclusion:  Finding factors is equivalent to finding lattice intersections with a "Factorix sized" hyperbolic curve.


	
So, it true that the LOP is equivalent to the algorithm for dividing the factorix x to find factors, (but from the composite mountain point of view)
Also, it explains with the diagonal line of symmetry, occuring at the sqrt(x), why you only have to search up to the sqrt(x) for factors,
and not all the way to x/2.


- Theory 1 (LOP): The LOP is the only place on Composite mountain that can possibly be a factor for the factorix.

