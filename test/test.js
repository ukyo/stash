test("Hello World", function(){
	stash.set("foo", "Hello World");
	equal(localStorage.length, 1, "length == 1");
	equal(stash.get("foo"), "Hello World", "foo == Hello World");
	stash.cutAll();
	equal(localStorage.length, 0, "length == 0");
});

test("RegExp Test", function(){
	stash.set("foo1", 1);
	stash.set("bar1", 2);
	stash.set("foo2", 3);
	stash.set("bar2", 4);
	equal(localStorage.length, 4, "length == 4");
	same(stash.get(/foo[0-9]/), {"foo1": 1, "foo2": 3}, "match foo");
	same(stash.get(/bar[0-9]/), {"bar1": 2, "bar2": 4}, "match bar");
	stash.cut(/foo[0-9]/);
	equal(localStorage.length, 2, "delete 2 items");
	stash.cut(/bar[0-9]/);
	equal(localStorage.length, 0, "delete all items");
});

