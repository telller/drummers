<?php
  function hydraulics_enqueue() {
    wp_register_script( 'hydraulics_initial_store' , get_template_directory_uri() . '/hydraulics_app/dist/initialStore.js', array(), false, true );
    wp_register_script( 'hydraulics_app' , get_template_directory_uri() . '/hydraulics_app/dist/bundle.js', array(), false, true );
    wp_register_style( 'hydraulics_bootstrap', get_template_directory_uri() . '/hydraulics_app/dist/bootstrap.css' );
    wp_register_style( 'hydraulics_styles', get_template_directory_uri() . '/hydraulics_app/dist/bundle.css' );

    wp_enqueue_script( 'hydraulics_initial_store' );
    wp_enqueue_style( 'hydraulics_bootstrap' );
    wp_enqueue_style( 'hydraulics_styles' );
    wp_enqueue_script( 'hydraulics_app' );

    wp_localize_script(
      'hydraulics_app',
      'myLocalized',
      array(
      	'baseUrl' => trailingslashit( get_template_directory_uri() )
      	)
      );
  }
