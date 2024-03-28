//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
	if (document.hidden) {
		//离开当前页面时标签显示内容
		titleTime = setTimeout(function () {
			document.title = 'Calvert’s Website ';
		}, 100);
		// clearTimeout(titleTime); 清空时间
	} else {
		//返回当前页面时标签显示内容
		// document.title = 'Calvert Lee - 前端开发爱好者' + OriginTitile;
		document.title = 'Calvert Lee - 前端开发爱好者';
		//两秒后变回正常标题
		// titleTime = setTimeout(function () {
		// 	document.title = OriginTitile;
		// }, 1000);
	}
});

// charts 页面适配明暗模式
function switchPostChart() {
	// 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
	let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4c4948' : 'rgba(255,255,255,0.7)';
	if (document.getElementById('posts-chart')) {
		let postsOptionNew = postsOption;
		postsOptionNew.textStyle.color = color;
		postsOptionNew.title.textStyle.color = color;
		postsOptionNew.xAxis.axisLine.lineStyle.color = color;
		postsOptionNew.yAxis.axisLine.lineStyle.color = color;
		postsChart.setOption(postsOptionNew);
	}
	if (document.getElementById('tags-chart')) {
		let tagsOptionNew = tagsOption;
		tagsOptionNew.textStyle.color = color;
		tagsOptionNew.title.textStyle.color = color;
		tagsOptionNew.xAxis.axisLine.lineStyle.color = color;
		tagsOptionNew.yAxis.axisLine.lineStyle.color = color;
		tagsChart.setOption(tagsOptionNew);
	}
	if (document.getElementById('categories-chart')) {
		let categoriesOptionNew = categoriesOption;
		categoriesOptionNew.textStyle.color = color;
		categoriesOptionNew.title.textStyle.color = color;
		categoriesOptionNew.legend.textStyle.color = color;
		categoriesChart.setOption(categoriesOptionNew);
	}
}

document.getElementById('mode-button').addEventListener('click', function () {
	setTimeout(switchPostChart, 100);
});

var rm = {};
var selectTextNow = '';

(window.oncontextmenu = function (e) {
	if (768 < document.body.clientWidth) {
		var n = e.clientX + 10,
			t = e.clientY,
			o = $('.rightMenuOther'),
			i = $('.rightMenuPlugin'),
			r = $('#menu-copytext'),
			c = $('#menu-commenttext'),
			m = $('#menu-newwindow'),
			a = $('#menu-copylink'),
			u = $('#menu-copyimg'),
			h = $('#menu-downloadimg'),
			d = $('#menu-search'),
			g = $('#menu-searchBaidu'),
			l = e.target.href,
			s = e.target.currentSrc,
			w = !1;
		return (
			o.show(),
				selectTextNow && window.getSelection()
					? ((w = !0), r.show(), c.show(), d.show(), g.show(), o.hide())
					: (r.hide(), c.hide(), g.hide(), d.hide()),
				l ? ((w = !0), m.show(), a.show(), o.hide(), (domhref = l)) : (m.hide(), a.hide()),
				s ? ((w = !0), u.show(), h.show(), o.hide(), (domImgSrc = s)) : (u.hide(), h.hide()),
				w ? i.show() : i.hide(),
				// rm.reloadrmSize(),
			// n + rmWidth > window.innerWidth && (n -= rmWidth + 10),
			// t + rmHeight > window.innerHeight && (t -= t + rmHeight - window.innerHeight),
			// 	rm.showRightMenu(!0, t, n),
				$('#rightmenu-mask').attr('style', 'display: flex'),
				!1
		);
	}
}),
	(rm.downloadimging = !1),
	(rm.copyUrl = function (e) {
		$('body').after("<input id='copyVal'></input>");
		var n = e,
			t = document.getElementById('copyVal');
		(t.value = n),
			t.select(),
			t.setSelectionRange(0, t.value.length),
			document.execCommand('copy'),
			$('#copyVal').remove();
	}),
	(rm.copyPageUrl = function () {
		var e = window.location.href;
		rm.copyUrl(e), btf.snackbarShow( '复制本页链接地址成功', !1, 2e3);
	});

