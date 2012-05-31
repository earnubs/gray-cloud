/**
 * handle routes
 */

var router = new Y.Router({
  root: '/',

  routes: [
    {path: '/', callback: function() { alert('Hello World.'); }},
    {path: '/foo', callback: function() { alert('Hello Foo'); }}
  ]
});

router.dispatch();


/** -- home --**/


