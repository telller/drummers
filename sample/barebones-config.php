<?php

/**
 * ReduxFramework Barebones Sample Config File
 * For full documentation, please visit: http://docs.reduxframework.com/
 */

if (!class_exists('Redux')) {
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
    'display_name'         => $theme->get('Name'),
    // Name that appears at the top of your panel
    'display_version'      => $theme->get('Version'),
    // Version that appears at the top of your panel
    'menu_type'            => 'menu',
    //Specify if the admin menu should appear or not. Options: menu or submenu (Under appearance only)
    'allow_sub_menu'       => true,
    // Show the sections below the admin menu item or not
    'menu_title'           => __('Theme Options', 'redux-framework-drummers'),
    'page_title'           => __('Theme Options', 'redux-framework-drummers'),
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
    'title' => __('Documentation', 'redux-framework-drummers'),
);

$args['admin_bar_links'][] = array(
    //'id'    => 'redux-support',
    'href'  => 'https://github.com/ReduxFramework/redux-framework/issues',
    'title' => __('Support', 'redux-framework-drummers'),
);

$args['admin_bar_links'][] = array(
    'id'    => 'redux-extensions',
    'href'  => 'reduxframework.com/extensions',
    'title' => __('Extensions', 'redux-framework-drummers'),
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
if (!isset($args['global_variable']) || $args['global_variable'] !== false) {
    if (!empty($args['global_variable'])) {
        $v = $args['global_variable'];
    } else {
        $v = str_replace('-', '_', $args['opt_name']);
    }
    $args['intro_text'] = sprintf(__('<p>Did you know that Redux sets a global variable for you? To access any of your saved options from within your code you can use your global variable: <strong>$%1$s</strong></p>', 'redux-framework-drummers'), $v);
} else {
    $args['intro_text'] = __('<p>This text is displayed above the options panel. It isn\'t required, but more info is always better! The intro_text field accepts all HTML.</p>', 'redux-framework-drummers');
}

// Add content after the form.
$args['footer_text'] = __('<p>This text is displayed below the options panel. It isn\'t required, but more info is always better! The footer_text field accepts all HTML.</p>', 'redux-framework-drummers');

Redux::setArgs($opt_name, $args);

/*
     * ---> END ARGUMENTS
     */

/*
     * ---> START HELP TABS
     */

$tabs = array(
    array(
        'id'      => 'redux-help-tab-1',
        'title'   => __('Theme Information 1', 'redux-framework-drummers'),
        'content' => __('<p>This is the tab content, HTML is allowed.</p>', 'redux-framework-drummers')
    ),
    array(
        'id'      => 'redux-help-tab-2',
        'title'   => __('Theme Information 2', 'redux-framework-drummers'),
        'content' => __('<p>This is the tab content, HTML is allowed.</p>', 'redux-framework-drummers')
    )
);
Redux::setHelpTab($opt_name, $tabs);

// Set the help sidebar
$content = __('<p>This is the sidebar content, HTML is allowed.</p>', 'redux-framework-drummers');
Redux::setHelpSidebar($opt_name, $content);

// START SECTION ABOUT US
Redux::setSection($opt_name, array(
    'title'      => __('About Us', 'redux-framework-drummers'),
    'desc'       => __('', 'redux-framework-drummers'),
    'icon'  => 'el el-group-alt',
    'id'         => 'about_us',
    'fields'     => array(
        array(
            'id'       => 'about_us_heading',
            'type'     => 'text',
            'title'    => __('Catalog Heading', 'redux-framework-drummers'),
            'subtitle' => __('Text Field for the about us heading', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        ),
        array(
            'id'       => 'about_us_textarea',
            'type'     => 'textarea',
            'title'    => __('About Us Text', 'redux-framework-drummers'),
            'subtitle' => __('Text Field for the about us text', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        )
    )
));
// -> START SECTIONS MEDIA
Redux::setSection($opt_name, array(
    'title'      => __('Media', 'redux-framework-drummers'),
    'desc'       => __('', 'redux-framework-drummers'),
    'icon'  => 'el el-home-alt',
    'id'         => 'home',
    'fields'     => array(
        array(
            'id'       => 'media_logo',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('Logo', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_phone',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('phone_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_logo1',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('Logo', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_carousel1',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('carousel_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_carousel2',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('carousel_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_carousel3',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('carousel_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_carousel4',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('carousel_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_catalog1',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('catalog_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_catalog2',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('catalog_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_catalog3',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('catalog_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_catalog4',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('catalog_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_catalog5',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('catalog_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_catalog6',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('catalog_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_blog',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('blog_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_ourFoto',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('OurFoto_images', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_search',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('search_button', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to change logo.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        ),
        array(
            'id'       => 'media_loader',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('media_loader', 'redux-framework-drummers'),
            'compiler' => 'true',
            'desc'     => __('', 'redux-framework-drummers'),
            'subtitle' => __('Uploader to media_loader.', 'redux-framework-drummers'),
            'default'  => array('url' => 'http://s.wordpress.org/style/images/codeispoetry.png'),
        )
    )
));
// START SECTION CONTACT
Redux::setSection($opt_name, array(
    'title'      => __('Contact', 'redux-framework-drummers'),
    'desc'       => __('', 'redux-framework-drummers'),
    'icon'  => 'el el-envelope-alt',
    'id'         => 'contact',
    'fields'     => array(
        array(
            'id'       => 'contact_one_phone',
            'type'     => 'text',
            'title'    => __('One phone', 'redux-framework-drummers'),
            'subtitle' => __('Text Field for the contact number', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        ),
        array(
            'id'       => 'contact_two_phone',
            'type'     => 'text',
            'title'    => __('Two phone', 'redux-framework-drummers'),
            'subtitle' => __('Text Field for the contact number.', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        ),
        array(
            'id'       => 'contact_location',
            'type'     => 'text',
            'title'    => __('Our location', 'redux-framework-drummers'),
            'subtitle' => __('Text Field for the contact our location.', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        ),
        array(
            'id'       => 'contact_email',
            'type'     => 'text',
            'title'    => __('Our email', 'redux-framework-drummers'),
            'subtitle' => __('Text Field for the contact our email', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        ),
        array(
            'id'       => 'contact_url_fb',
            'type'     => 'text',
            'title'    => __('Facebook', 'redux-framework-drummers'),
            'subtitle' => __('Посилання на сторінку в фейсбуці', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        ),
        array(
            'id'       => 'contact_url_twit',
            'type'     => 'text',
            'title'    => __('Twitter', 'redux-framework-drummers'),
            'subtitle' => __('Посилання на сторінку в твітері', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        ),
        array(
            'id'       => 'contact_url_inst',
            'type'     => 'text',
            'title'    => __('Instagram', 'redux-framework-drummers'),
            'subtitle' => __('Посилання на сторінку в інстаграмі', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        ),
    )
));
// START SECTION CATALOG
Redux::setSection($opt_name, array(
    'title'      => __('Catalog', 'redux-framework-drummers'),
    'desc'       => __('', 'redux-framework-drummers'),
    'icon'  => 'el el-th',
    'id'         => 'catalog',
    'fields'     => array(
        array(
            'id'       => 'catalog_heading',
            'type'     => 'text',
            'title'    => __('Catalog Heading', 'redux-framework-drummers'),
            'subtitle' => __('Text Field for the catalog heading', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        ),
        array(
            'id'       => 'catalog_textarea',
            'type'     => 'textarea',
            'title'    => __('Catalog Text', 'redux-framework-drummers'),
            'subtitle' => __('Textarea for the catalog info above footer', 'redux-framework-drummers'),
            'desc'     => __('', 'redux-framework-drummers'),
        )
    )
));
