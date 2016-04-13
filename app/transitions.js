export default function(){
  this.transition(
    this.fromRoute('pallet.index'),
    this.toRoute('pallet.new'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
