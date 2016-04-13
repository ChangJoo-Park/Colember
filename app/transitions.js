export default function(){
  this.transition(
    this.fromRoute('palette.index'),
    this.toRoute('palette.new'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
