function brain(prog) {
    switch (prog) {
      case "bye":
        return brainRuntime("++++++++++[>+++++++>+++++++++++>++++++++++>++++++++++++>++++>+++>+++++++++>+<<<<<<<<-]>+.>+..>.--.>+.<+++.>>++++.>++.>---.<<<<<.+++.------.>-.>>>+.>>+++.---.");
      case "hello":
        return brainRuntime("++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.");
      case "fib":
        return brainRuntime("+++++++++++>+>>>>++++++++++++++++++++++++++++++++++++++++++++>++++++++++++++++++++++++++++++++<<<<<<[>[>>>>>>+>+<<<<<<<-]>>>>>>>[<<<<<<<+>>>>>>>-]<[>++++++++++[-<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<-]>>[-]]<<]>>>[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<+>>[-]]<<<<<<<]>>>>>[++++++++++++++++++++++++++++++++++++++++++++++++.[-]]++++++++++<[->-<]>++++++++++++++++++++++++++++++++++++++++++++++++.[-]<<<<<<<<<<<<[>>>+>+<<<<-]>>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+>-]>[<+>-]<<<-]");
      default:
        if (typeof(prog) === "string")
          return brainRuntime(prog);
    }
    return "Invalid program";
  }
  
  function brainRuntime(program) {
    const memory = Array(30000).fill(0);
    const validCommands = [">", "<", "+", "-", ".", ",", "[", "]"];
    const commands = program
      .split('')
      .filter(
        command => validCommands.indexOf(command) !== -1
      );
    const terminal = [];
    let dataPointer = 0;
    let commandPointer = 0;
    while (commandPointer < commands.length) {
      switch (commands[commandPointer]) {
        case ">":
          commandPointer++;
          dataPointer++;
          break;
        case "<":
          commandPointer++;
          dataPointer--;
          break;
        case "+":
          commandPointer++;
          memory[dataPointer]++;
          break;
        case "-":
          commandPointer++;
          memory[dataPointer]--;
          break;
        case ".":
          commandPointer++;
          terminal.push(String.fromCharCode(memory[dataPointer]));
          break;
        case ",":
          console.log("Not Implemented")
          break;
        case "[":
          if (memory[dataPointer] === 0) {
            let open = 1;
            while (open !== 0) {
              commandPointer++;
              if (commands[commandPointer] === "[") open++;
              else if (commands[commandPointer] === "]") open--;
            }
          } else {
            commandPointer++;
          }
          break;
        case "]":
          if (memory[dataPointer] !== 0) {
            let open = 1;
            while (open !== 0) {
              commandPointer--;
              if (commands[commandPointer] === "[") open--;
              else if (commands[commandPointer] === "]") open++;
            }
          } else {
            commandPointer++;
          }
          break;
      }
    }
    return terminal.join("");
}
console.log(brain("++++++[>++++++++++<-]>+++++."));