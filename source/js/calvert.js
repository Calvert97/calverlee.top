var calvert={
	topPostScroll: function() {
        if (document.getElementById("recent-post-top")) {
            let e = document.getElementById("recent-post-top");
            e.addEventListener("mousewheel", (function(t) {
                e.scrollLeft += -t.wheelDelta / 2,
                document.body.clientWidth < 1200 && t.preventDefault()
            }
            ), {
                passive: !1
            })
        }
    },
};


function eventListenFun(){
	tagPageActive();
	document.addEventListener('pjax:success', (e) => {
		categoriesBarActive()
		tagPageActive()
		// onlyHome()
		// addNavBackgroundInit()
	})
};

var getTimeState = function () {
	var e = new Date().getHours(),
		t = '';
	return (
		0 <= e && e <= 5
			? (t = '晚安')
			: 5 < e && e <= 10
			? (t = '早上好')
			: 10 < e && e <= 14
			? (t = '中午好')
			: 14 < e && e <= 18
			? (t = '下午好')
			: 18 < e && e <= 24 && (t = '晚上好'),
		t
	);
};
function sayhi() {
	document.querySelector('#author-info__sayhi') &&
		(document.getElementById('author-info__sayhi').innerHTML = '👋  ' + getTimeState() + '！我是');
}

function categoriesBarActive() {
	var e,
		t = window.location.pathname;
	'/' == (t = decodeURIComponent(t))
		? document.querySelector('#category-bar') && document.getElementById('首页').classList.add('select')
		: /\/categories\/.*?\//.test(t) &&
		((e = t.split('/')[2]),
		document.querySelector('#category-bar') && document.getElementById(e).classList.add('select'));
};

//暗色模式
function switchDarkMode() {
	// Switch Between Light And Dark Mode
	const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
	if (nowMode === 'light') {
		activateDarkMode();
		saveToLocal.set('theme', 'dark', 2);
		GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
	} else {
		activateLightMode();
		saveToLocal.set('theme', 'light', 2);
		GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
	}
	// handle some cases
	typeof utterancesTheme === 'function' && utterancesTheme();
	typeof FB === 'object' && window.loadFBComment();
	window.DISQUS &&
	document.getElementById('disqus_thread').children.length &&
	setTimeout(() => window.disqusReset(), 200);
};

function tagPageActive() {
	var e = window.location.pathname,
		e = decodeURIComponent(e);
	// console.log(e);
	var t,
		o,
		n = /\/tags\/.*?\//.test(e);
	// console.log(n),
	n &&
	((t = e.split('/')),
		console.log(t[2]),
		(o = t[2]),
	document.querySelector('#tag-page-tags') && document.getElementById(o).classList.add('select'));
}