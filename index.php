<?php
    $blog = get_blog_information();
    generate_data($drummers_demo, $blog);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset=<?php bloginfo("charset"); ?>>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <title>Hydraulics</title>
    <?php wp_head() ?>
</head>
<body id="top">
  <div id="root"></div>
  <?php wp_footer(); ?>
</body>
</html>
