<?php

    /**
     * ReduxFramework Barebones Sample Config File
     * For full documentation, please visit: http://docs.reduxframework.com/
     */

    if ( ! class_exists( 'Redux' ) ) {
        return;
    }

    // This is your option name where all the Redux data is stored.
    $opt_name = "drummers_demo";

    /**
     * ---> SET ARGUMENTS
     * All the possible arguments for Redux.
     * For full documentation on arguments, please refer to: https://github.com/ReduxFramework/ReduxFramework/wiki/Arguments
     * */

    $theme = wp_get_theme(); // For use with some settings. Not necessary.

    $args = array(
        // TYPICAL -> Change these values as you need/desire
        'opt_name'             => $opt_name,
        // This is where your data is stored in the database and also becomes your global variable name.
        'display_name'         => $theme->get( 'Name' ),
        // Name that appears at the top of your panel
        'display_version'      => $theme->get( 'Version' ),
        // Version that appears at the top of your panel
        'menu_type'            => 'menu',
        //Specify if the admin menu should appear or not. Options: menu or submenu (Under appearance only)
        'allow_sub_menu'       => true,
        // Show the sections below the admin menu item or not
        'menu_title'           => __( 'Theme Options', 'redux-framework-drummers' ),
        'page_title'           => __( 'Theme Options', 'redux-framework-drummers' ),
        // You will need to generate a Google API key to use this feature.
        // Please visit: https://developers.google.com/fonts/docs/developer_api#Auth
        'google_api_key'       => '',
        // Set it you want google fonts to update weekly. A google_api_key value is required.
        'google_update_weekly' => false,
        // Must be defined to add google fonts to the typography module
        'async_typography'     => true,
        // Use a asynchronous font on the front end or font string
        //'disable_google_fonts_link' => true,                    // Disable this in case you want to create your own google fonts loader
        'admin_bar'            => true,
        // Show the panel pages on the admin bar
        'admin_bar_icon'       => 'dashicons-portfolio',
        // Choose an icon for the admin bar menu
        'admin_bar_priority'   => 50,
        // Choose an priority for the admin bar menu
        'global_variable'      => '',
        // Set a different name for your global variable other than the opt_name
        'dev_mode'             => true,
        // Show the time the page took to load, etc
        'update_notice'        => true,
        // If dev_mode is enabled, will notify developer of updated versions available in the GitHub Repo
        'customizer'           => true,
        // Enable basic customizer support
        //'open_expanded'     => true,                    // Allow you to start the panel in an expanded way initially.
        //'disable_save_warn' => true,                    // Disable the save warning when a user changes a field

        // OPTIONAL -> Give you extra features
        'page_priority'        => null,
        // Order where the menu appears in the admin area. If there is any conflict, something will not show. Warning.
        'page_parent'          => 'themes.php',
        // For a full list of options, visit: http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
        'page_permissions'     => 'manage_options',
        // Permissions needed to access the options panel.
        'menu_icon'            => '',
        // Specify a custom URL to an icon
        'last_tab'             => '',
        // Force your panel to always open to a specific tab (by id)
        'page_icon'            => 'icon-themes',
        // Icon displayed in the admin panel next to your menu_title
        'page_slug'            => '_options',
        // Page slug used to denote the panel
        'save_defaults'        => true,
        // On load save the defaults to DB before user clicks save or not
        'default_show'         => false,
        // If true, shows the default value next to each field that is not the default value.
        'default_mark'         => '',
        // What to print by the field's title if the value shown is default. Suggested: *
        'show_import_export'   => true,
        // Shows the Import/Export panel when not used as a field.

        // CAREFUL -> These options are for advanced use only
        'transient_time'       => 60 * MINUTE_IN_SECONDS,
        'output'               => true,
        // Global shut-off for dynamic CSS output by the framework. Will also disable google fonts output
        'output_tag'           => true,
        // Allows dynamic CSS to be generated for customizer and google fonts, but stops the dynamic CSS from going to the head
        // 'footer_credit'     => '',                   // Disable the footer credit of Redux. Please leave if you can help it.

        // FUTURE -> Not in use yet, but reserved or partially implemented. Use at your own risk.
        'database'             => '',
        // possible: options, theme_mods, theme_mods_expanded, transient. Not fully functional, warning!

        'use_cdn'              => true,
        // If you prefer not to use the CDN for Select2, Ace Editor, and others, you may download the Redux Vendor Support plugin yourself and run locally or embed it in your code.

        //'compiler'             => true,

        // HINTS
        'hints'                => array(
            'icon'          => 'el el-question-sign',
            'icon_position' => 'right',
            'icon_color'    => 'lightgray',
            'icon_size'     => 'normal',
            'tip_style'     => array(
                'color'   => 'light',
                'shadow'  => true,
                'rounded' => false,
                'style'   => '',
            ),
            'tip_position'  => array(
                'my' => 'top left',
                'at' => 'bottom right',
            ),
            'tip_effect'    => array(
                'show' => array(
                    'effect'   => 'slide',
                    'duration' => '500',
                    'event'    => 'mouseover',
                ),
                'hide' => array(
                    'effect'   => 'slide',
                    'duration' => '500',
                    'event'    => 'click mouseleave',
                ),
            ),
        )
    );

    // ADMIN BAR LINKS -> Setup custom links in the admin bar menu as external items.
    $args['admin_bar_links'][] = array(
        'id'    => 'redux-docs',
        'href'  => 'http://docs.reduxframework.com/',
        'title' => __( 'Documentation', 'redux-framework-drummers' ),
    );

    $args['admin_bar_links'][] = array(
        //'id'    => 'redux-support',
        'href'  => 'https://github.com/ReduxFramework/redux-framework/issues',
        'title' => __( 'Support', 'redux-framework-drummers' ),
    );

    $args['admin_bar_links'][] = array(
        'id'    => 'redux-extensions',
        'href'  => 'reduxframework.com/extensions',
        'title' => __( 'Extensions', 'redux-framework-drummers' ),
    );

    // SOCIAL ICONS -> Setup custom links in the footer for quick links in your panel footer icons.
    $args['share_icons'][] = array(
        'url'   => 'https://github.com/ReduxFramework/ReduxFramework',
        'title' => 'Visit us on GitHub',
        'icon'  => 'el el-github'
        //'img'   => '', // You can use icon OR img. IMG needs to be a full URL.
    );
    $args['share_icons'][] = array(
        'url'   => 'https://www.facebook.com/pages/Redux-Framework/243141545850368',
        'title' => 'Like us on Facebook',
        'icon'  => 'el el-facebook'
    );
    $args['share_icons'][] = array(
        'url'   => 'http://twitter.com/reduxframework',
        'title' => 'Follow us on Twitter',
        'icon'  => 'el el-twitter'
    );
    $args['share_icons'][] = array(
        'url'   => 'http://www.linkedin.com/company/redux-framework',
        'title' => 'Find us on LinkedIn',
        'icon'  => 'el el-linkedin'
    );

    // Panel Intro text -> before the form
    if ( ! isset( $args['global_variable'] ) || $args['global_variable'] !== false ) {
        if ( ! empty( $args['global_variable'] ) ) {
            $v = $args['global_variable'];
        } else {
            $v = str_replace( '-', '_', $args['opt_name'] );
        }
        $args['intro_text'] = sprintf( __( '<p>Did you know that Redux sets a global variable for you? To access any of your saved options from within your code you can use your global variable: <strong>$%1$s</strong></p>', 'redux-framework-drummers' ), $v );
    } else {
        $args['intro_text'] = __( '<p>This text is displayed above the options panel. It isn\'t required, but more info is always better! The intro_text field accepts all HTML.</p>', 'redux-framework-drummers' );
    }

    // Add content after the form.
    $args['footer_text'] = __( '<p>This text is displayed below the options panel. It isn\'t required, but more info is always better! The footer_text field accepts all HTML.</p>', 'redux-framework-drummers' );

    Redux::setArgs( $opt_name, $args );

    /*
     * ---> END ARGUMENTS
     */

    /*
     * ---> START HELP TABS
     */

    $tabs = array(
        array(
            'id'      => 'redux-help-tab-1',
            'title'   => __( 'Theme Information 1', 'redux-framework-drummers' ),
            'content' => __( '<p>This is the tab content, HTML is allowed.</p>', 'redux-framework-drummers' )
        ),
        array(
            'id'      => 'redux-help-tab-2',
            'title'   => __( 'Theme Information 2', 'redux-framework-drummers' ),
            'content' => __( '<p>This is the tab content, HTML is allowed.</p>', 'redux-framework-drummers' )
        )
    );
    Redux::setHelpTab( $opt_name, $tabs );

    // Set the help sidebar
    $content = __( '<p>This is the sidebar content, HTML is allowed.</p>', 'redux-framework-drummers' );
    Redux::setHelpSidebar( $opt_name, $content );


    /*
     * <--- END HELP TABS
     */


    /*
     *
     * ---> START SECTIONS
     *
     */

    /*

        As of Redux 3.5+, there is an extensive API. This API can be used in a mix/match mode allowing for


     */

    // -> START SECTIONS
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Home', 'redux-framework-drummers' ),
        'desc'       => __( '', 'redux-framework-drummers' ),
        'icon'  => 'el el-home-alt',
        'id'         => 'home',
        'fields'     => array(
            array(
                'id'    => 'home_info',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el el-home-alt',
                'title' => __( 'Section for the home page configuration', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'home_media_logo',
                'type'     => 'media',
                'url'      => true,
                'title'    => __( 'Media w/ URL', 'redux-framework-drummers' ),
                'compiler' => 'true',
                //'mode'      => false, // Can be set to false to allow any media type, or can also be set to any mime type.
                'desc'     => __( '', 'redux-framework-drummers' ),
                'subtitle' => __( 'Uploader to change logo.', 'redux-framework-drummers' ),
                'default'  => array( 'url' => 'http://s.wordpress.org/style/images/codeispoetry.png' ),
                //'hint'      => array(
                //    'title'     => 'Hint Title',
                //    'content'   => 'This is a <b>hint</b> for the media field with a Title.',
                //)
            ),
            array(
                'id'          => 'home_top_slides',
                'type'        => 'slides',
                'title'       => __( 'Slides Options', 'redux-redux-framework-drummers' ),
                'subtitle'    => __( 'Unlimited slides with drag and drop sortings. Slides Options for the top slider.', 'redux-framework-demo' ),
                'desc'        => __( '', 'redux-framework-demo' ),
                'placeholder' => array(
                    'title'       => __( 'This is a title', 'redux-framework-drummers' ),
                    'description' => __( 'Description Here', 'redux-framework-drummers' ),
                    'url'         => __( 'Give us a link!', 'redux-framework-drummers' ),
                )
            ),
            array(
                'id'       => 'home_button_explore_more',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for button "Explore more".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Explore more',
            ),
            array(
                'id'       => 'home_media_photo',
                'type'     => 'media',
                'url'      => true,
                'title'    => __( 'Media w/ URL', 'redux-framework-drummers' ),
                'compiler' => 'true',
                //'mode'      => false, // Can be set to false to allow any media type, or can also be set to any mime type.
                'desc'     => __( 'Basic media uploader with disabled URL input field.', 'redux-framework-drummers' ),
                'subtitle' => __( 'Uploader to change left photo.', 'redux-framework-drummers' ),
                'default'  => array( 'url' => 'http://s.wordpress.org/style/images/codeispoetry.png' ),
                //'hint'      => array(
                //    'title'     => 'Hint Title',
                //    'content'   => 'This is a <b>hint</b> for the media field with a Title.',
                //)
            ),
            array(
                'id'       => 'home_title_start_here',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "Start Here".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Start here',
            ),
            array(
                'id'       => 'home_text_start_here',
                'type'     => 'multi_text',
                'title'    => __( 'Multi Text Option', 'redux-framework-drummers' ),
                'subtitle' => __( 'Multi Text Option for "Start Here" section.', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'       => 'home_button_short_intro',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Short intro".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Short intro',
            ),
            array(
                'id'=>'home_intro_audio',
                'type' => 'media',
                'title' => __('Media field', 'redux-framework-drummers'),
                'url' => true,
                'mode' => false,
                'readonly' => false,
                'preview' => false,
                'desc'=> __('Audio for the intro section', 'redux-framework-drummers'),
                'subtitle' => __('Upload any media using the WordPress native uploader', 'redux-framework-demo'),
            ),
            array(
                'id'       => 'home_title_latest_posts',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "Latest posts".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Latest posts',
            ),
            array(
                'id'       => 'home_button_filter_post',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Filter posts".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Filter posts',
            ),
            array(
                'id'       => 'home_posts_filters',
                'type'     => 'multi_text',
                'title'    => __( 'Posts filters', 'redux-framework-drummers' ),
                'subtitle' => __( 'Posts filters', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'       => 'home_button_read_blog',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Read blog".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Read blog',
            ),
            array(
                'id'       => 'home_title_latest_podcasts',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "Latest podcasts".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Latest podcasts',
            ),
            array(
                'id'       => 'home_button_explore_podcasts',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Explore podcasts".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Explore podcasts',
            ),
            array(
                'id'       => 'home_info_message',
                'type'     => 'textarea',
                'title'    => __( 'Textarea Option', 'redux-framework-drummers' ),
                'subtitle' => __( 'Textarea Option for the section "Information Message".', 'redux-framework-demo' ),
                'desc'     => __( '', 'redux-framework-demo' ),
                'default'  => "“My work (and this site) is devoted to sharing ideas, tools and resources, that will help you become a better drummer. You don´t have to get it perfect. You just have to get it going.”",
            ),
            array(
                'id'       => 'home_button_discover',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "DISCOVER MORE"', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'DISCOVER MORE',
            ),
            array(
                'id'       => 'home_title_featured_products',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "Featured products"', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Featured products',
            ),
            array(
                'id'          => 'home_bottom_slides',
                'type'        => 'slides',
                'title'       => __( 'Slides Options', 'redux-redux-framework-drummers' ),
                'subtitle'    => __( 'Unlimited slides with drag and drop sortings. Slides Options for the bottom slider.', 'redux-framework-demo' ),
                'desc'        => __( '', 'redux-framework-demo' ),
                'placeholder' => array(
                    'title'       => __( 'This is a title', 'redux-framework-drummers' ),
                    'description' => __( 'Description Here', 'redux-framework-drummers' ),
                    'url'         => __( 'Give us a link!', 'redux-framework-drummers' ),
                )
            ),
        )
    ) );
    // -> END HOME SECTION

    // -> START BLOG SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Blog', 'redux-framework-drummers' ),
        'desc'       => __( '', 'redux-framework-drummers' ),
        'icon'  => 'el el-blogger',
        'id'         => 'blog',
        'fields'     => array(
            array(
                'id'    => 'blog_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-blogger',
                'title' => __( 'Section for the blog page configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'blog_media_logo',
                'type'     => 'media',
                'url'      => true,
                'title'    => __( 'Media w/ URL', 'redux-framework-drummers' ),
                'compiler' => 'true',
                //'mode'      => false, // Can be set to false to allow any media type, or can also be set to any mime type.
                'desc'     => __( 'Basic media uploader with disabled URL input field.', 'redux-framework-drummers' ),
                'subtitle' => __( 'Uploader to change top logo', 'redux-framework-drummers' ),
                'default'  => array( 'url' => 'http://s.wordpress.org/style/images/codeispoetry.png' ),
                //'hint'      => array(
                //    'title'     => 'Hint Title',
                //    'content'   => 'This is a <b>hint</b> for the media field with a Title.',
                //)
            ),
            array(
                'id'       => 'blog_text_brief',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the brief text.', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => '"My belief in helping you learn is simple: Share the truth, be honest, work hard,
and lead by example. That’s what I’m all about, and that’s what this blog is all about."',
            ),
            array(
                'id'       => 'blog_button_filter_content',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Filter content".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Filter content',
            ),
            array(
                'id'       => 'blog_filter_content',
                'type'     => 'multi_text',
                'title'    => __( 'Blog filters', 'redux-framework-drummers' ),
                'subtitle' => __( 'Blog filters', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'       => 'blog_search_placeholder',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the search placeholder', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Find anything you want to know by the keyword search',
            ),
            array(
                'id'       => 'blog_button_search',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Search', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Search',
            ),
            array(
                'id'       => 'blog_button_load_more',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Load more"', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Load more',
            ),
        )
    ) );
    // -> END HOME SECTION

    // -> START PRODUCTS SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Products', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'icon'  => 'el el-shopping-cart-sign',
        'id'         => 'products',
        'subsection' => false,
        'fields'     => array(
            array(
                'id'    => 'products_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-shopping-cart-sign',
                'title' => __( 'Section for the products page configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'products_media_logo',
                'type'     => 'media',
                'url'      => true,
                'title'    => __( 'Media w/ URL', 'redux-framework-drummers' ),
                'compiler' => 'true',
                //'mode'      => false, // Can be set to false to allow any media type, or can also be set to any mime type.
                'desc'     => __( 'Basic media uploader with disabled URL input field.', 'redux-framework-drummers' ),
                'subtitle' => __( 'Uploader to change top logo.', 'redux-framework-drummers' ),
                'default'  => array( 'url' => 'http://s.wordpress.org/style/images/codeispoetry.png' ),
                //'hint'      => array(
                //    'title'     => 'Hint Title',
                //    'content'   => 'This is a <b>hint</b> for the media field with a Title.',
                //)
            ),
            array(
                'id'       => 'products_text_brief',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the brief information.', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'My blog posts are not enough for you and you want a concentrated
dose of know-how? Take a look at my shop!',
            ),
            array(
                'id'       => 'products_button_checkout',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Checkout now".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Checkout now',
            ),
            array(
                'id'       => 'products_button_open_filters',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Open filters".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Open filters',
            ),
            array(
                'id'       => 'products_filters',
                'type'     => 'multi_text',
                'title'    => __( 'Products filters', 'redux-framework-drummers' ),
                'subtitle' => __( 'Products filters', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'       => 'products_button_more_coming',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "More coming soon".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'More coming soon',
            ),
        )
    ) );
    // -> END PRODUCTS SECTION

    // -> START PODCASTS SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Podcasts', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'icon'  => 'el el-podcast',
        'id'         => 'podcasts',
        'fields'     => array(
            array(
                'id'    => 'podcasts_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-podcast',
                'title' => __( 'Section for the podcasts page configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'podcasts_media_logo',
                'type'     => 'media',
                'url'      => true,
                'title'    => __( 'Media w/ URL', 'redux-framework-drummers' ),
                'compiler' => 'true',
                //'mode'      => false, // Can be set to false to allow any media type, or can also be set to any mime type.
                'desc'     => __( 'Basic media uploader with disabled URL input field.', 'redux-framework-drummers' ),
                'subtitle' => __( 'Uploader to change top logo.', 'redux-framework-drummers' ),
                'default'  => array( 'url' => 'http://s.wordpress.org/style/images/codeispoetry.png' ),
                //'hint'      => array(
                //    'title'     => 'Hint Title',
                //    'content'   => 'This is a <b>hint</b> for the media field with a Title.',
                //)
            ),
            array(
                'id'       => 'podcasts_text_brief',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the brief information.', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Welcome to the Drummersblog Podcast. Weekly interviews,
strategy and advice for reaching your goals as a drummer.',
            ),
            array(
                'id'       => 'podcasts_button_filter_podcasts',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Filter podcasts".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Filter podcasts',
            ),
            array(
                'id'       => 'podcasts_filters',
                'type'     => 'multi_text',
                'title'    => __( 'Podcasts filters', 'redux-framework-drummers' ),
                'subtitle' => __( 'Podcasts filters', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'       => 'podcasts_button_ask_ole',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Ask Ole".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Ask Ole',
            ),
            array(
                'id'       => 'podcasts_search_placeholder',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the search placeholder', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Find relevant podcasts',
            ),
            array(
                'id'       => 'podcasts_button_search',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Search".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Search',
            ),
            array(
                'id'       => 'podcasts_title_latest_podcasts',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field  for the title "Latest podcasts".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Latest podcasts',
            ),
            array(
                'id'       => 'podcasts_button_load_more',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Load more".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Load more',
            )
        )
    ) );
    // -> END PODCASTS SECTION

    // -> START MY STORY SECTION

    Redux::setSection( $opt_name, array(
        'title'      => __( 'My story', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'icon'  => 'el el-smiley-alt',
        'id'         => 'my_story',
        'fields'     => array(
            array(
                'id'    => 'my_story_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-smiley-alt',
                'title' => __( 'Section for the my story page configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'my_story_media_logo',
                'type'     => 'media',
                'url'      => true,
                'title'    => __( 'Media w/ URL', 'redux-framework-drummers' ),
                'compiler' => 'true',
                //'mode'      => false, // Can be set to false to allow any media type, or can also be set to any mime type.
                'desc'     => __( 'Basic media uploader with disabled URL input field.', 'redux-framework-drummers' ),
                'subtitle' => __( 'Uploader to change top logo.', 'redux-framework-drummers' ),
                'default'  => array( 'url' => 'http://s.wordpress.org/style/images/codeispoetry.png' ),
                //'hint'      => array(
                //    'title'     => 'Hint Title',
                //    'content'   => 'This is a <b>hint</b> for the media field with a Title.',
                //)
            ),
            array(
                'id'       => 'my_story_title_who',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "Who is OLE?".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Who is OLE?',
            ),
            array(
                'id'       => 'my_story_header_text',
                'type'     => 'multi_text',
                'title'    => __( 'Multi Text Option', 'redux-framework-drummers' ),
                'subtitle' => __( 'Multi Text Option for section "Who is OLE?".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'       => 'my_story_title_start',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "How Drummersblog Began".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'How Drummersblog Began',
            ),
            array(
                'id'       => 'my_story_text_start',
                'type'     => 'multi_text',
                'title'    => __( 'Multi Text Option', 'redux-framework-drummers' ),
                'subtitle' => __( 'Multi Text Option for the section "How Drummersblog Began".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'       => 'my_story_info_message',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the information message.', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'My work (and this site) is devoted to sharing ideas, tools and resources, that will help you become a better drummer. You don´t have to get it perfect. You just have to get it going.',
            ),
            array(
                'id'       => 'my_story_title_partners',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "My Partners".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'My Partners',
            ),
            array(
                'id'       => 'my_story_content_partners',
                'type'     => 'multi_text',
                'title'    => __( 'Multi Text Option for content', 'redux-framework-drummers' ),
                'subtitle' => __( 'Multi Text Option for content', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'          => 'my_story_partners',
                'type'        => 'slides',
                'title'       => __( 'Partners Options', 'redux-redux-framework-drummers' ),
                'subtitle'    => __( 'Options for the partners section.', 'redux-framework-demo' ),
                'desc'        => __( '', 'redux-framework-demo' ),
                'placeholder' => array(
                    'title'       => __( 'This is a title', 'redux-framework-drummers' ),
                    'description' => __( 'Description Here', 'redux-framework-drummers' ),
                    'url'         => __( 'Give us a link!', 'redux-framework-drummers' ),
                )
            ),
        )
    ) );
    // -> END MY STORY SECTION

    // -> START CONTACT SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Contact', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'icon'  => 'el el-envelope-alt',
        'id'         => 'contact',
        'fields'     => array(
            array(
                'id'    => 'contact_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-envelope-alt',
                'title' => __( 'Section for the contact page configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'contact_media_logo',
                'type'     => 'media',
                'url'      => true,
                'title'    => __( 'Media w/ URL', 'redux-framework-drummers' ),
                'compiler' => 'true',
                //'mode'      => false, // Can be set to false to allow any media type, or can also be set to any mime type.
                'desc'     => __( 'Basic media uploader with disabled URL input field.', 'redux-framework-drummers' ),
                'subtitle' => __( 'Uploader to change top logo.', 'redux-framework-drummers' ),
                'default'  => array( 'url' => 'http://s.wordpress.org/style/images/codeispoetry.png' ),
                //'hint'      => array(
                //    'title'     => 'Hint Title',
                //    'content'   => 'This is a <b>hint</b> for the media field with a Title.',
                //)
            ),
            array(
                'id'       => 'contact_button_social1',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the social button - 1', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Social - 1',
            ),
            array(
                'id'       => 'opt_contact_url_social1',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the url social - 1', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Url social - 1',
            ),
            array(
                'id'       => 'contact_button_social2',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the social button - 2', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Social - 2',
            ),
            array(
                'id'       => 'opt_contact_url_social2',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the url social - 2', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Url social - 2',
            ),
            array(
                'id'       => 'contact_button_social3',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the social button - 3', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Social - 3',
            ),
            array(
                'id'       => 'opt_contact_url_social3',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the url social - 3', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Url social - 3',
            ),
            array(
                'id'       => 'contact_button_social4',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the social button - 4', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Social - 4',
            ),
            array(
                'id'       => 'opt_contact_url_social4',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the url social - 4', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Url social - 4',
            ),
            array(
                'id'       => 'contact_title_contact',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "Contact".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Contact',
            ),
            array(
                'id'       => 'contact_text_contact',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the section "contact".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Let´s get to know each other beter. I would love to hear from you.t',
            ),
            array(
                'id'       => 'contact_placeholder_name',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the placeholder "Your name".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Your name',
            ),
            array(
                'id'       => 'contact_placeholder_email',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the placeholder "Your email".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Your email',
            ),
            array(
                'id'       => 'contact_placeholder_subject',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the placeholder "Your subject".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Your subject',
            ),
            array(
                'id'       => 'contact_your_message',
                'type'     => 'textarea',
                'title'    => __( 'Textarea Option', 'redux-framework-demo' ),
                'subtitle' => __( 'Textarea Option for the placeholder "Your message".', 'redux-framework-demo' ),
                'desc'     => __( '', 'redux-framework-demo' ),
                'default'  => 'Your message',
            ),
            array(
                'id'       => 'contact_button_send',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Send".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Send',
            )
        )
    ) );
    // -> END MY CONTACT SECTION

    // -> START ADDITIONAL OPTIONS SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Additional Options', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'icon'  => 'el el el-cog-alt',
        'id'         => 'additional',
        'fields'     => array(
            array(
                'id'    => 'additional_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-cog-alt',
                'title' => __( 'Section for additional configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            )
        )
    ) );
    // -> END MY ADDITIONAL SECTION

    // -> START MENU OPTIONS SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Menu', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'subsection' => true,
        'icon'  => 'el el-lines',
        'id'         => 'menu-subsection',
        'fields'     => array(
            array(
                'id'    => 'menu_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-lines',
                'title' => __( 'Section for the menu configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'    => 'menu_info_critical1',
                'type'  => 'info',
                'style' => 'critical',
                'title' => __( 'Top menu configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'menu_top_items',
                'type'     => 'multi_text',
                'title'    => __( 'Multi Text Option', 'redux-framework-drummers' ),
                'subtitle' => __( 'Multi Text Option for "Top Menu".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'    => 'menu_info_critical2',
                'type'  => 'info',
                'style' => 'critical',
                'title' => __( 'Bottom menu configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'menu_bottom_items',
                'type'     => 'multi_text',
                'title'    => __( 'Multi Text Option', 'redux-framework-drummers' ),
                'subtitle' => __( 'Multi Text Option for "Bottom Menu".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'       => 'menu_icon_facebook',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the icon "Facebook".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Facebook',
            ),
            array(
                'id'       => 'menu_icon_facebook_url',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the icon url "Facebook".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'https://www.facebook.com/',
            ),
            array(
                'id'       => 'menu_icon_twitter',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the icon "Twitter".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Twitter',
            ),
            array(
                'id'       => 'menu_icon_twitter_url',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the icon url "Twitter".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'https://twitter.com/',
            ),
            array(
                'id'       => 'menu_icon_instagram',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the icon "Instagram".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Instagram',
            ),
            array(
                'id'       => 'menu_icon_instagram_url',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the icon url "Instagram".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'https://www.instagram.com/',
            ),
        )
    ) );
    // -> END MY MENU SECTION

    // -> START ASK OLE OPTIONS SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Ask Ole', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'subsection' => true,
        'icon'  => 'el el-question-sign',
        'id'         => 'ask-subsection',
        'fields'     => array(
            array(
                'id'    => 'ask_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-question-sign',
                'title' => __( 'Section for the Ask Ole section configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'ask_title_ask',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "Ask Ole".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Ask Ole',
            ),
            array(
                'id'       => 'ask_text_ask',
                'type'     => 'multi_text',
                'title'    => __( 'Multi Text Option', 'redux-framework-drummers' ),
                'subtitle' => __( 'Multi Text Option for section "Ask Ole".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
            array(
                'id'       => 'ask_button_record',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Record your message".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Record your message',
            ),
            array(
                'id'       => 'ask_button_remove',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Remove".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Remove',
            ),
            array(
                'id'       => 'ask_button_send',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Send".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Send',
            ),
            array(
                'id'       => 'ask_placeholder_email',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the placeholder "Email".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Email*',
            ),
            array(
                'id'       => 'ask_placeholder_additional',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the placeholder "Additional Details".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Additional Details',
            ),
        )
    ) );
    // -> END ASK OLE SECTION

    // -> START NEWSLETTER OPTIONS SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Newsletter', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'subsection' => true,
        'icon'  => 'el el-info-circle',
        'id'         => 'newsletter-subsection',
        'fields'     => array(
            array(
                'id'    => 'newsletter_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-info-circle',
                'title' => __( 'Section for the Newsletter section configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'newsletter_title_newsletter',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the title "Newsletter".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Newsletter',
            ),
            array(
                'id'       => 'newsletter_text_newsletter',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the section "Newsletter".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Newsletter text here...',
            ),
            array(
                'id'       => 'newsletter_placeholder_email',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the placeholder "Your email".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Your email',
            ),
            array(
                'id'       => 'newsletter_button_sing_up',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the button "Sing Up".', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Sing Up',
            ),
        )
    ) );

    // -> END NEWSLETTER SECTION

    // -> START FOOTER SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Footer', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'subsection' => true,
        'icon'  => 'el el-website-alt',
        'id'         => 'footer-subsection',
        'fields'     => array(
            array(
                'id'    => 'footer_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-website-alt',
                'title' => __( 'Section for the Footer section configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'footer_text',
                'type'     => 'text',
                'title'    => __( 'Text Field', 'redux-framework-drummers' ),
                'subtitle' => __( 'Text Field for the footer.', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
                'default'  => 'Text for the footer here',
            ),
        )
    ) );
    // -> START SOCIAL ICONS SECTION
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Social icons', 'redux-framework-drummers' ),
        'desc'       => __( '' ),
        'subsection' => true,
        'icon'  => 'el el-slideshare',
        'id'         => 'social-subsection',
        'fields'     => array(
            array(
                'id'    => 'social_info_success',
                'type'  => 'info',
                'style' => 'success',
                'icon'  => 'el el-slideshare',
                'title' => __( 'Section for the social icons configuration.', 'redux-framework-drummers' ),
                'desc'  => __( '', 'redux-framework-demo' )
            ),
            array(
                'id'       => 'social_icons_link',
                'type'     => 'multi_text',
                'title'    => __( 'Multi Text Option', 'redux-framework-drummers' ),
                'subtitle' => __( 'Multi Text Option to for social icons.', 'redux-framework-drummers' ),
                'desc'     => __( '', 'redux-framework-drummers' ),
            ),
        )
    ) );

    /*------------------------*/

    /*
     * <--- END SECTIONS
     */
