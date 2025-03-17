---
layout: post
title:  "CAmpression"
date:   2025-03-16 11:39:55 -0600
tags: xn ca
#thumb: 
no-border: true
caption: Jezzball?!?
project-link: /xn/campression
---

# CAmpression
### (i.e. Cellular Automata Compression)

The basic idea is that...

## Rules for CAmpression:
1. The balls must continually bounce
2. The balls ghost each other, (and collisions will be handled at the end)
3. The balls move 2x the speed of the walls
4. The 2x speed is implemented by moving the balls every tick and the walls every other tick
5. The walls are skittish, and only move if there are 2 empty spaces between it and a ball
6. If a ball's next move is into a wall, then it bounces - changes direction that tick, and moves the next tick
7. The state/history must be tracked, and if there is a repeat state, or an ambiguous state, then the previous non-ambiguous is the best xn that can be achieved.