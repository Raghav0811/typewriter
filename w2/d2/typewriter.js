
    const sentence = "hello there from lighthouse labs";
    var tempSent = sentence + '\n';
    var timeCount = 0;
        for (const char of tempSent) {
          timeCount += 50;
        setTimeout(() => {
          process.stdout.write (char);   // print the char here
      }, timeCount)
    }


    