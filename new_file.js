$(function(){
	var num1=0,num2=0,num3=0;
	$("#productbox").click(function(){
		$("#product").slideToggle("fast",function(){
			num1++;
			if ((num1)%2==0)
			{
				$("#productbox").css("background-color","#fff");
			}
			else
			{
				$("#productbox").css("background-color","#f2f2f2");
			}
		});
		$("#shop").slideUp("fast");
		$("#support").slideUp("fast");		
		secondnav("product","snav-left","snav-right","snav-right-content",290);	
		
	});
	$("#shopbox").click(function(){
		$("#shop").slideToggle("fast",function(){
			num2++;
			if ((num2)%2==0)
			{
				$("#shopbox").css("background-color","#fff");
			}
			else
			{
				$("#shopbox").css("background-color","#f2f2f2");
			}
		});
		$("#product").slideUp("fast");
		$("#support").slideUp("fast");
		secondnav("shopbox","snav-left","snav-right","snav-right-content",580);	
	});
	$("#supportbox").click(function(){
		$("#support").slideToggle("fast",function(){
			num3++;
			if ((num3)%2==0)
			{
				$("#supportbox").css("background-color","#fff");
			}
			else
			{
				$("#supportbox").css("background-color","#f2f2f2");
			}
		});
		$("#product").slideUp("fast");
		$("#shop").slideUp("fast");
		secondnav("support","snav-left","snav-right","snav-right-content",580);	
	});
	$("#nav-more").click(function(){
		$("#rightbox").toggle();
		$(".first-nav").slideToggle();
	});
	$(".first-nav").each(function(){
		$(this).click(function(){
			$(this).next().toggle("fast",function(){
				$(this).find(".secong-nav").slideToggle();
			});
		});
	});
	$(".secong-nav").each(function(){
		$(this).click(function(){
			$(this).next().slideToggle();
		});
	});
	$("#pic-box1 .pic-box-content").each(function(index){
		this.id=index;
	});
	$("#btn-left").click(function(){
		var $in=$("#pic-box1 .active");
		var id=$in.attr("id");
		if (!$in.is(":animated"))
		{
			if(id == 0)
			{
				$in.fadeOut(1000).removeClass("active");
				$("#pic-box1 .pic-box-content").each(function(){
					
					if (this.id==1)
					{
						$(this).fadeIn(1000).addClass("active");
					}
				});
			}
			else
			{
				$in.fadeOut(1000).removeClass("active");
				$in.prev().fadeIn(1000).addClass("active");
			}
		}
	});
	$("#btn-right").click(function(){
		var $in=$("#pic-box1 .active");
		var id=$in.attr("id");
		if (!$in.is(":animated"))
		{
			if(id == 1)
			{
				$in.fadeOut(1000).removeClass("active");
				$("#pic-box1 .pic-box-content").each(function(){
					
					if (this.id==0)
					{
						$(this).fadeIn(1000).addClass("active");
					}
				});
			}
			else
			{
				$in.fadeOut(1000).removeClass("active");
				$in.next().fadeIn(1000).addClass("active");
			}
		}
	});
})
function secondnav(boxid,leftclass,rightclass,rightcontent,chushi){
	var $box=$("#"+boxid),
		$left=$("#"+boxid+" ."+leftclass),
		$right=$("#"+boxid+" ."+rightcontent),
		$cright=$("#"+boxid+" ."+rightclass),
		$list=$left.find("li");
	$right.each(function(index){
		this.id=index;
	});
	$list.each(function(index){
		this.id=index;
		var $id=this.id;
		$(this).mouseover(function(){
			$cright.show("fast");
			$right.each(function(){
				if (this.id==$id)
				{
					var $slist=$(this).siblings();
					$slist.hide();
					$(this).show();
					var $rheight=$(this).height(),
						$fheight=sheight(chushi,$rheight);
					$left.css("height",$fheight+"px");
					$(this).css("height",$fheight+"px")
				}
			});
		});
	});
}
function sheight(num1,num2){
	if (num1>num2)
	{
		return num1;
	}
	else{
		return num2;
	}
}
