import { exec } from "child_process";

export default (command: string, print: boolean, callback: Function) => {

    const execCmd = exec(command);

    // print stdout (success)
    if (execCmd != null && execCmd.stdout != null) {
        execCmd.stdout.on('data', (data: string) => {
            if (print)
                console.log(data);

            callback(data);
        });
    }

    // print stderr (info, warning or error)
    if (execCmd != null && execCmd.stderr != null) {
        execCmd.stderr.on('data', (data: string) => {
            console.log(data);
        });
    }
}