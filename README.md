gray-cloud
==========

Trying YUI3 for mobile web app protyping

    git submodule add http://github.com/yui/yui3 yui3
    git submodule add http://github.com/yui/yui3-gallery yui3-gallery
    git submodule add https://github.com/yui/builder.git builder

Apache:

    ProxyRequests Off
    ProxyPass /yui/combo http://gray-cloud:3000
    ProxyPassReverse /yui/combo http://gray-cloud:3000


