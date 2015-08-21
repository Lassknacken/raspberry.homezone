<?php

if(isset($_POST['switch']))
{
	shell_exec("sudo send {$_POST['switch']}");
	echo "sent: {$_POST['switch']}";
}


if(isset($_GET['action'])){
	$action = $_GET['action'];

	switch($action){
		case "get_crontab":
			$output = shell_exec('sudo crontab -u pi -l');
			//file_put_contents('/tmp/crontab.txt', $output.'* * * * * NEW_CRON'.PHP_EOL);
			echo $output;
			//echo exec('crontab /tmp/crontab.txt');	
		break;
		default:
		break;	
	}
}

?>