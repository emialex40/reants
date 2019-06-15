<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Aedificator
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div id="wrapper" class="wrapper">
		<header id="header" class="header">
			<?php if ( ot_get_option('pwt_enable_top_bar') == 'on' ) { ?>
			<div class="top-bar">
				<div class="container">
					<div class="column-container top-bar-container">
						<div class="column-6-12 left">
							<div class="gutter">
								<?php if ( ot_get_option('pwt_header_left_text') ) { ?><p class="wellcome-user"><?php echo esc_html(ot_get_option('pwt_header_left_text')); ?></p><?php } ?>
							</div>
						</div>
						<div class="column-6-12 right">
							<div class="gutter">
								<p class="contact-information">
                                  <a class="icon-vk" href="https://vk.com/club160801861" target="_blank"><i class="fa fa-vk"></i></a>
								    <?php if ( ot_get_option('pwt_header_email') ) { ?><a class="icon-envelope" href="mailto:<?php echo esc_html(ot_get_option('pwt_header_email')); ?>"><?php echo esc_html(ot_get_option('pwt_header_email')); ?></a><?php } ?>
									<?php if ( ot_get_option('pwt_header_phone') ) { ?><a class="icon-phone" href="tel:<?php echo esc_html(ot_get_option('pwt_header_phone')); ?>"><?php echo esc_html(ot_get_option('pwt_header_phone')); ?></a><?php } ?>
                                  <a class="icon-phone" href="tel:+7-953-366-1103">+7-953-366-1103 <img src="/wp-content/uploads/2018/07/Viber-for-Android-388579.png" alt=""> <img src="/wp-content/uploads/2018/07/whatsapp.png" alt=""></a>
								<a href="#" class="eModal-1 header-btn">Онлайн вызов</a>
								</p>
							</div>
						</div>
					</div>
				</div> <!--  END container  -->	
			</div> <!--  END top-bar  -->
			<?php } ?>
			<div class="header-block">
				<div class="container">
					<div class="gutter clearfix">
						<?php if ( ot_get_option('pwt_logo_upload') ) { ?>
						   <a href="<?php echo esc_url(home_url('/')); ?>"><img src="<?php echo esc_url(ot_get_option('pwt_logo_upload')); ?>" /></a>
						<?php } else if (ot_get_option('pwt_text_logo_1')){  ?>
						   <h1 class="logo"><a href="<?php echo esc_url(home_url('/')); ?>"><?php echo esc_html(ot_get_option('pwt_text_logo_1')); ?><span><?php echo esc_html(ot_get_option('pwt_text_logo_2')); ?></span></a></h1>
						<?php } else {  ?>
						   <h1 class="logo"><a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a></h1>
						<?php } ?>	
                        <?php if ( ot_get_option('pwt_enable_search') == 'on' ) { ?>						
						
						<?php } ?>
						<nav class="menu-top-container">
							<a class="icon-menu" href="#"><?php _e( 'Меню', 'aedificator' ); ?></a>
							<?php if ( has_nav_menu( 'aedificator-menu' ) ) { ?>
							   <?php wp_nav_menu( array('container'=> '', 'theme_location' => 'aedificator-menu', 'items_wrap'  => '<ul class="menu-top">%3$s</ul>'  ) ); ?>
							   <?php wp_nav_menu( array('container'=> '', 'theme_location' => 'aedificator-menu', 'items_wrap'  => '<ul class="menu-top-mob">%3$s</ul>'  ) ); ?>
							<?php } else { ?>
								<?php wp_nav_menu(  array('container'=> '', 'menu_class'  => 'menu-top', 'items_wrap'  => '<ul class="menu-top">%3$s</ul>' ) ); ?>
								<?php wp_nav_menu(  array('container'=> '', 'menu_class'  => 'menu-top-mob', 'items_wrap'  => '<ul class="menu-top-mob">%3$s</ul>' ) ); ?>									
							<?php } ?>							
						</nav> <!--  END menu-top-container  -->
						<div class="search-form">
							<form class="wpcf7-form" action="<?php echo esc_url(home_url('/')); ?>" method="post" enctype="multipart/form-data">
								<div class="field-container">
									<input  class="search-field" name="s" type="text" value="<?php the_search_query(); ?>" placeholder="поиск" />
								</div>
								<input class="icon-search" type="submit" name="submit" value="" />
							</form>
						</div> <!--  END search-form  -->
					</div>
				</div> <!--  END container  -->	
			</div> <!--  END header-block  -->
		</header> <!--  END header  -->
	<div id="content" class="content">