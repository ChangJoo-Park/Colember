export default function(){
	let duration = 500;
  this.transition(
    this.fromRoute('palette.index'),
    this.toRoute('palette.new'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('palette.index'),
    this.toRoute('palette.show'),
    this.use('explode', {
      matchBy: 'data-palette-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-palette-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
}
