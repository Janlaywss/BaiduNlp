$(document).ready(function() {
    $('.loader').hide();//隐藏加载动画
    $('.ui.modal').modal('hide');//隐藏加载动画
	 function btnbind () {
         $(".lexer-btn").bind("click",function () {
             var name = $(this).children(".name").val();
             var url = $(this).children(".url").val();
             var ne=$(this).children(".ne").val();
             var pos=$(this).children(".pos").val();
             var basic_words=$(this).children(".basic_words").val();
             if(!(ne==null||ne==="undefined")){//如果词性为空
                 var Chinese=$(this).children(".neChinese").val();
                 $("#tip-cixing").text("专有词性："+Chinese+"("+ne+")");
             }else{
                 var Chinese=$(this).children(".posChinese").val();
                 $("#tip-cixing").text("词性："+Chinese+"("+pos+")");
             }
             $("#tip-name").text(name);
             $("#tip-basic_words").text("基础词："+basic_words);
             if(url==="undefined"){//如果链接为空
                 $("#tip-url").hide();
             }else{
                 $("#tip-url").show();
                 $("#tip-url a").attr("href",url);
             }
             $('.ui.modal').modal('show');
         });
     }
			$(".lexer-search").click(function () {
				var text=$("textarea").val();
				if(text==null||text==="undefined"||text===""){
				    alert("输入框不能为空");
				    return false;
                }
                $('.loader').show();
                SyncLexerList(text);
            });
			function SyncLexerList(text) { //异步刷新列表
				$.ajax({
                    type:"post",//请求方式
					url: "getLexerResult.json?text="+text,
					async: false,
					success: function(data) {
                        $(".column").children("button").remove();
                        var txt = doT.template($("#lexer").text());
						$(".column").append(txt(data));
                        btnbind ();
                        $('.loader').hide();
                    },
                    error:function(data){
                        if(data.status==404){
                             alert("未连接到网络");
                             $('.loader').hide();
                             return false;
                        }
                    }
				});
			}
	});