<?php
/*
Plugin Name: Hedzi Plugin
Plugin URI:
Description: Hedzi Fancy Product Designer Mod
Author: Mike Scoboria
Author URI:
Version: 0.1
*/

add_action("admin_menu", "addMenu");

function addMenu(){
	add_menu_page("Example Options", "Example Options", 4, "example_options", "exampleMenu");
}

function exampleMenu(){
	echo "hello world";
}

function twentysixteen_child_scripts(){

	 // Register the script like this for a plugin:
    wp_register_script( 'extra js', plugins_url( '/js/extras2.js', __FILE__ ), array('jquery') );

	wp_enqueue_script('extra js');
}

add_action('wp_enqueue_scripts', 'twentysixteen_child_scripts');