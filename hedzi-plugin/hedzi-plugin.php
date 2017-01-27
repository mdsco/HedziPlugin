<?php
/*
Plugin Name: Hedzi Plugin
Plugin URI:
Description: Hedzi Fancy Product Designer Layout Manager Mod
Author: Mike Scoboria
Author URI:
Version: 0.1
*/

add_action("admin_menu", "addMenu");

// function addMenu(){
// 	add_menu_page("Example Options", "Example Options", 4, "example_options", "exampleMenu");
// }

// function exampleMenu(){
// 	echo "hello world";
// }

function twentysixteen_child_scripts(){

    wp_register_script( 'Layout Manager Mods', plugins_url( '/js/layout-manager-mod.js', __FILE__ ), array('jquery') );

	wp_enqueue_script('Layout Manager Mods');
}

add_action('wp_enqueue_scripts', 'twentysixteen_child_scripts');