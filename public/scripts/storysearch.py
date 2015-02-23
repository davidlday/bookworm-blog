#!/usr/bin/env python2.7
# -*- coding: UTF-8 -*-
import sys
import cgi
import urllib
import urllib2

solr_url = 'http://localhost:27373/solr/collection1/select'
content_type = '';
results = '';

fs = cgi.FieldStorage()

params = {}
for key in fs:
    params[key] = fs.getvalue(key)
data = urllib.urlencode(params)
request = urllib2.Request(solr_url, data)
try:
    response = urllib2.urlopen(request)
    headers = response.info()
    results = response.read()
    if 'json.wrf' in fs:
        content_type = 'application/javascript'
    else:
        content_type = headers['Content-Type']
except urllib2.HTTPError, e:
    if 'json.wrf' in fs:
        content_type = 'application/javascript'
    else:
        content_type = 'text/html'
    results = e.code
except urllib2.URLError, e:
    if 'json.wrf' in fs:
        content_type = 'application/javascript'
    else:
        content_type = 'text/html'
    results = e.reason

print "Content-Type: " + content_type
print "\n"
print "\n"
print results
print "\n"
