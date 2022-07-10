using System;
using api.Domain;

namespace api.Logics
{
    public class Cameras
    {
        public Picture TakePicture() {
            var picture = new Picture {
                FileName = "test.jpg",//DateTime.Now.ToString()
            };

            var cmd=$"raspistill -vf -hf -v -o /home/pi/homezone/wwwroot/{picture.FileName}";
            var result = ShellHelper.Bash(cmd);

            return picture;
        }

        public void StreamStart(){
            var cmd ="python3 rpi_cam_stream.py &";
            var result = ShellHelper.Bash(cmd);
            Console.WriteLine("--------------");
            Console.WriteLine(result);
            Console.WriteLine("--------------");
        }

        public void StreamStop(){
            // var cmd ="python3 rpi_cam_stream.py &";
            // var result = ShellHelper.Bash(cmd);
        }
    }
}