import sys
from time import strftime, gmtime

POST_PATH = '/got/_posts/'

title = raw_input('Enter title: ')
tags = raw_input('Enter tags: ')
postName = strftime('%Y-%m-%d-') + title
postDate = strftime('%Y-%m-%d %H:%M:%S -0600', gmtime())

frontMatter = \
"""---
layout: post
title: %s
tags:  %s
---"""
frontMatter = frontMatter % (title, postDate, tags)

try:
	path = POST_PATH + postName + '.md'
	file = open(path, 'w')   
	file.write(frontMatter);
	file.close()
	print ('Successfully created ' + postName)

except:
	print ('Error creating ' + path)
	sys.exit(0) 

