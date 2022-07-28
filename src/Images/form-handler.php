<?php 
    if (isset($_POST["submit"])){ 
    	$to = "marshalljweston@gmail.com";

        $from = empty(trim($_POST["email"])) ? "noemail@sample.com" : sanitize_string($_POST["email"]);

        $subject = "Web Form";

        $message = empty(trim($_POST["message"])) ?  "No message" : sanitize_string($_POST["message"]);

        $name = empty(trim($_POST["name"])) ? "No name" : sanitize_string($_POST["name"]);

        $human = empty(trim($_POST["human"])) ? "0" : sanitize_string($_POST["human"]);

        $headers = "From: $from" . "\r\n";

        $message .= "\n\n - $name";

        if (intval($human) == 4){
            $sent = mail($to,$subject,$message,$headers);
            if ($sent){
                echo "<p><b>You sent:</b> $message</p>";
        }else{
            echo "<p>Mail not sent!</p>";
        }
        }else{
            if(intval($human) != 4)
            {
                echo "<p style='color: #ff1111'><br>Wrong answer, retry please</p>";
            }
        }
		header("Location:../index.html");
		exit();
    }
    function sanitize_string($string){
	$string = trim($string);
	$string = strip_tags($string);
	return $string;
    }
?>