try {
(void 0===window.QSI.NoCreative||window.QTest)&&(QSI.NoCreative=QSI.util.Creative({initialize:function(a){this.globalInitialize(a),this.shouldShow()&&this.displayed.resolve()}}));
} catch(e) {
  if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
    QSI.dbg.e(e);
  }
}