<?php
    function generate_data( $data_object, $blog ) {
        $localStore = json_encode( $data_object );
        $file_name =  get_template_directory() . '/hydraulics_app/dist/initialStore.js';
        $file_store = fopen($file_name, "w") or die("Unable to open file!");
        $store_data = "var initialStore = {$localStore}";
        fwrite($file_store, $store_data);
        fclose($file_store);
    };
?>
