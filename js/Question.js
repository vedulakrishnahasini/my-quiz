class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here...");
    this.input2 = createInput("Enter Correct Option No.");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    this.text = createElement('h4');
  }
  hide(){
    
    this.title.hide();
  this.input1.hide();
  this.button.hide();
  this.input2.hide();
  }

  display(){
    this.title.html("Ridiculous Riddle");
    this.title.position(350, 0);

   this.question.html("Question:- David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?")
   this.question.position(75,80);
   this.option1.html("1: Tap ");
   this.option1.position(75,100);
   this.option2.html("2: Rattle");
   this.option2.position(75,120);
   this.option3.html("3: David ");
   this.option3.position(75,140);
   this.option4.html("4: Snap");
   this.option4.position(75,160);

   this.input1.position(75,230);
   this.input2.position(275, 230);
   this.button.position(215, 300);

   this.button.mousePressed(()=>{
     this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    contestant.name = this.input1.value();
    contestant.answer = this.input2.value()
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);

  this.text.html("Please wait for the results");
  this.text.position(500,350);
  });

  }

  
}
