<?php
// Set up
add_theme_support( 'post-thumbnails' );
// Includes
include( get_template_directory(). '/includes/front/enqueue.php' );
include( get_template_directory(). '/includes/back/generate_initial_data.php' );
include( get_template_directory(). '/includes/back/get_blog_info.php' );
require_once (dirname(__FILE__) . '/sample/barebones-config.php');
// Action & Filter Hooks
add_action( 'wp_enqueue_scripts', 'hydraulics_enqueue' );
// Shortcodes

// Remove Updates Norifications
function remove_core_updates(){
global $wp_version;return(object) array('last_checked'=> time(),'version_checked'=> $wp_version,);
}
add_filter('pre_site_transient_update_core','remove_core_updates');
add_filter('pre_site_transient_update_plugins','remove_core_updates');
add_filter('pre_site_transient_update_themes','remove_core_updates');
