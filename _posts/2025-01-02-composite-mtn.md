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

Now, we know that when we are looking for factors, we are looking for any two numbers that when multiplied together equal the Factorix.  

And, coincidentally, this humble table shows the result of multiplying two numbers together.

However, it's difficult to tell just from the table what is actually happening, so, we are going to graph it. *(Always graph your data)*


Specifically, we're just going to do a simple 2d loop, and show the products as the height:

{% highlight python %}
for x in range(0, factorix):
    for y in range(0, factorix):
        height = x*y;
        # plot height
        
{% endhighlight %}
<img src="/sloi/img/fact/composite/plot.png"/>

<iframe src="/lib/gfx3?/../../sloi/widgets/fact/composite/composite" width="800" height="800"></iframe>

In this interactive visualization of Composite Mtn, the height somewhat poetically reminds me of a shore-line, with the water line hitting at some height...

However, it does help illustrate two important concepts:
1. Symmetry along the diagonal - Which means searching for factors only has to be done up to the sqrt(Factorix), because it's symmetrical.

2. On Composite Mtn, the *only* place that can possibly be a factor for the Factorix is on hyperbolic curve, dubbed "Line of Potentiality" LOP, where the Factorix plane mets the mountain.

For example, it's instructive to look at the highly composite number 60, and it's LOP coordinates:  2x30, 3x20, 4x15, 5x12, 6x10, 7x8, which are all the factors of 60.

As another example, look at a prime Factorix, e.g. 11, and see how it's height exactly equals any of the mountain blocks, except at 1x11, and 11x1 - and thus it is prime.

Conclusion:  Finding factors is equivalent to finding lattice intersections with a "Factorix sized" hyperbolic curve.

We can check this conclusion by plotting in Desmos as well: (e.g. Factorix of 12)

<img src="/sloi/img/fact/composite/desmos-plot.png" style="width:75%"/>

And we see that this checks out.

So, this isn't really groundbreaking, or anything new.  But, it can be helpful to give us a geometric intuition about products & factors, and also gives a bit of a "base-camp" conceptually that we can use to jump off into various excursions of the local scenery.




