<?php
    function get_blog_information()
    {
        $blog = array(
            "name" => get_bloginfo($show="name"),
            "description" => get_bloginfo($show="description"),
            "wpurl" => get_bloginfo($show="wpurl"),
            "url" => get_bloginfo($show="url"),
            "admin_email" => get_bloginfo($show="admin_email"),
            "charset" => get_bloginfo($show="charset"),
            "version" => get_bloginfo($show="version"),
            "html_type" => get_bloginfo($show="html_type"),
            "text_direction" => get_bloginfo($show="text_direction"),
            "language" => get_bloginfo($show="language"),
            "stylesheet_url" => get_bloginfo($show="stylesheet_url"),
            "stylesheet_directory" => get_bloginfo($show="stylesheet_directory"),
            "template_url" => get_bloginfo($show="template_url"),
            "pingback_url" => get_bloginfo($show="pingback_url"),
            "atom_url" => get_bloginfo($show="atom_url"),
            "rdf_url" => get_bloginfo($show="rdf_url"),
            "rss_url" => get_bloginfo($show="rss_url"),
            "rss2_url" => get_bloginfo($show="rss2_url"),
            "comments_atom_url" => get_bloginfo($show="comments_atom_url"),
            "comments_rss2_url" => get_bloginfo($show="comments_rss2_url")
        );
        return json_encode($blog);
    }
 ?>
