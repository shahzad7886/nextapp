<?php
if (extension_loaded('gd') && function_exists('gd_info')) {
    echo "GD library is installed and enabled.";
} else {
    echo "GD library is not installed or enabled.";
}
echo phpinfo();
?>
