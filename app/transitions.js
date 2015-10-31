export default function(){
  this.transition(
    this.fromRoute('view1'),
    this.toRoute('view2'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('view4'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('view6'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('view4'),
    this.toRoute('view6'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('view4'),
    this.toRoute('index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('view6'),
    this.toRoute('index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('view6'),
    this.toRoute('index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};