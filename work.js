var wiki_html_elements = ['source', 'nowiki', 'code', 'span', 'div']; //听着有点像大象,这是wiki里支持的一些html代码
var title_elements = ["==", "===", "====", "=====", "=="]; //标题字符,永远也看起来不会用到一级
var compleate_work = {
	test: {
		match: /\n(=+)$/,
		search: function(term, callback) {
			callback($.map(title_elements, function(element) {
				return element.indexOf(term) === 0 ? element : null; //查字典咯
			}));
		},
		template: function(title) { //制造模板咯
			return '<img src="media/images/title/' + title.length + '.png"</img>' + title;
		},
		index: 1,
		replace: function(title) {
			return ["\n" + title + " ", " " + title]; //标题送回去
		},
	},
	html: { //自带的测试函数
		match: /<(\w*)$/,
		search: function(term, callback) {
			callback($.map(wiki_html_elements, function(element) {
				return element.indexOf(term) === 0 ? element : null;
			}));
		},
		index: 1,
		replace: function(element) {
			return ['<' + element + '>', '</' + element + '>'];
		}
	},
}; // 结束绑定事件

$(function() {
	$('#textarea2').textcomplete(compleate_work);
}); //全部结束