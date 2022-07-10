
using System;
using System.Diagnostics;

namespace api.Logics{

public static class ShellHelper
    {
        public static string Bash(string cmd)
        {
            var escapedArgs = cmd.Replace("\"", "\\\"");
            
            var process = new Process()
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = "/bin/bash",
                    Arguments = $"-c \"{escapedArgs}\"",
                    // FileName="cmd.exe",
                    // Arguments = $"/c {escapedArgs}",
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                    CreateNoWindow = true,
                }
            };
            process.Start();
            string result = process.StandardOutput.ReadToEnd();
            process.WaitForExit();
            return result;
        }
        public static string ToOnString(this bool on){
                return Convert.ToInt32(on).ToString();
            }
    }
}