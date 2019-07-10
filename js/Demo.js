$(document).ready(function() {
	var duohao;
	var ModalaS = new Array();
	for(var i = 1; i <= 18; i++) {
		$('#Modal-' + i).click(function() {
			duohao = $(this).children(".Modals").html();
		});
		ModalaS[i] = '#Modal-' + i;
	};
	
	new jBox('Modal', {
		attach: ModalaS,
		width: 450,
		height: 350,
		closeButton: 'title',
		animation: false,
		title: 'AJAX request',
		ajax: {
			url: 'https://ajaxresponse.com/2',
			data: {},
			reload: 'strict',
			setContent: false,
			beforeSend: function() {
				this.setContent('');
				this.setTitle('<div class="ajax-sending">正在进入请稍后</div>');
			},
			complete: function(response) {
				this.setTitle('<div class="ajax-complete">' + duohao + '</div>');
			},
			success: function(response) {
				this.setContent('<div class="ajax-success"><style type="text/css">table td{border-bottom: 1px solid #bbb;text-align: left;padding: 8px;font-family: "微软雅黑";font-size: 16px;}</style><table border="0" cellspacing="0" cellpadding="0" style="width:393px;height: 272px;margin: 0 auto;"><tr><td>客户名称</td><td style="text-align: right;">台成</td></tr><tr><td>品名</td><td style="text-align: right;">曝光系统</td></tr><tr><td>生产线</td><td style="text-align: right;">P005</td></tr><tr><td>工单状态</td><td style="text-align: right;">缺料中</td></tr><tr><td>预计产量</td><td style="text-align: right;">20台</td></tr><tr><td>已生产量</td><td style="text-align: right;">15台</td></tr><tr><td style="border-bottom: 0px;height:50px;">其它</td><td style="border-bottom: 0px;"></td></tr></table></div>');
			},
			error: function() {
				this.setContent('<div class="ajax-error">获取失败</div>');
			}
		}
	});
});