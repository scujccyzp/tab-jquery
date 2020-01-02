; (function ($) {

	var Tab = function (tab) {
		var _this = this;
		// 保存单个tab组件
		this.tab = tab;
		// 保存tab标签列表、对应的内容列表
		this.tabItems = this.tab.find("ul.tab_nav li");
		this.contentItems = this.tab.find("div.content_wrap div.content_item");
			this.tabItems.bind("click", function () {
				_this.invoke($(this));
			})

	};

	Tab.prototype = {
		invoke: function (currentTab) {
			var _this = this;
			var index = currentTab.index();
			// tab选中状态
			currentTab.addClass('active').siblings().removeClass('active');
			// 切换对应的内容区域
			var conItems = this.contentItems;
				conItems.eq(index).fadeIn().siblings().fadeOut();
		}
	};

	// 注册成jq方法
	$.fn.extend({
		tab: function () {
			this.each(function () {
				new Tab($(this));
			});
			return this;
		}
	})

	window.Tab = Tab;
})(jQuery);