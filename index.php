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
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" >
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <title>Hydraulics</title>
    <?php wp_head() ?>
</head>
<body id="top">
  <div id="root"></div>
  <?php wp_footer(); ?>
  <script src="https://use.fontawesome.com/e5c2f9dfe8.js"></script>
</body>
</html>
