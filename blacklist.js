// pure mock data, for special levels only
// in the format of level, category, id
var blacklist = [
	['1-1', '外套', '220'],
  ['1-1', '连衣裙', '401'],
  ['1-1', '连衣裙', '402'],
  ['1-1', '连衣裙', '403'],
  ['1-1', '连衣裙', '404'],
  ['1-1', '外套', '218'],
  ['1-2', '连衣裙', '270'],
  ['1-2', '连衣裙', '274'],
  ['1-2', '连衣裙', '275'],
  ['1-2', '连衣裙', '394'],
  ['1-2', '上衣', '413'],
  ['1-2', '连衣裙', '060'],
  ['1-2', '外套', '260'],
  ['1-2', '连衣裙', '393'],
  ['1-2', '上衣', '409'],
  ['1-2', '连衣裙', '435'],
  ['1-2', '连衣裙', '436'],
  ['1-3', '外套', '230'],
  ['1-3', '外套', '231'],
  ['1-3', '外套', '232'],
  ['1-3', '连衣裙', '571'],
  ['1-3', '连衣裙', '583'],
  ['1-3', '连衣裙', '584'],
  ['1-4', '连衣裙', '181'],
  ['1-4', '外套', '261'],
  ['1-4', '连衣裙', '356'],
  ['1-4', '上衣', '399'],
  ['1-4', '上衣', '400'],
  ['1-4', '连衣裙', '482'],
  ['1-4', '连衣裙', '483'],
  ['1-4', '连衣裙', '484'],
  ['1-4', '连衣裙', '640'],
  ['1-4', '连衣裙', '181'],
  ['1-4', '外套', '213'],
  ['1-4', '外套', '214'],
  ['1-4', '连衣裙', '259'],
  ['1-4', '连衣裙', '335'],
  ['1-4', '下装', '368'],
  ['1-5', '下装', '351'],
  ['1-5', '下装', '352'],
  ['1-5', '上衣', '380'],
  ['1-5', '上衣', '381'],
  ['1-5', '下装', '383'],
  ['1-5', '下装', '395'],
  ['1-5', '连衣裙', '405'],
  ['1-5', '上衣', '415'],
  ['1-5', '上衣', '421'],
  ['1-5', '下装', '032'],
  ['1-5', '下装', '350'],
  ['1-5', '下装', '402'],
  ['1-5', '上衣', '437'],
  ['1-5', '上衣', '379'],
  ['1-5', '下装', '350'],
  ['1-6', '外套', '226'],
  ['1-6', '外套', '227'],
  ['1-6', '连衣裙', '356'],
  ['1-6', '下装', '375'],
  ['1-6', '外套', '213'],
  ['1-6', '外套', '214'],
  ['1-6', '外套', '260'],
  ['1-6', '上衣', '336'],
  ['1-6', '上衣', '408'],
  ['1-6', '连衣裙', '648'],
  ['1-6', '连衣裙', '377'],
  ['1-6', '连衣裙', '413'],
  ['1-6', '连衣裙', '429'],
  ['1-7', '下装', '148'],
  ['1-7', '外套', '213'],
  ['1-7', '外套', '214'],
  ['1-7', '外套', '215'],
  ['1-7', '连衣裙', '482'],
  ['1-7', '连衣裙', '483'],
  ['1-7', '连衣裙', '484'],
  ['1-7', '下装', '008'],
  ['1-7', '下装', '008'],
  ['1-7', '连衣裙', '083'],
  ['1-7', '外套', '215'],
  ['1-7', '外套', '226'],
  ['1-7', '外套', '227'],
  ['1-7', '上衣', '354'],
  ['1-7', '上衣', '373'],
  ['1-8', '外套', '233'],
  ['1-8', '下装', '391'],
  ['1-8', '上衣', '423'],
  ['1-8', '连衣裙', '577'],
  ['1-8', '连衣裙', '734'],
  ['1-8', '外套', '225'],
  ['1-8', '上衣', '243'],
  ['1-8', '连衣裙', '398'],
  ['1-8', '连衣裙', '406'],
  ['1-8', '连衣裙', '418'],
  ['1-8', '连衣裙', '517'],
  ['1-8', '连衣裙', '636'],
  ['1-9', '袜子-袜套', '310'],
  ['1-9', '上衣', '384'],
  ['1-9', '上衣', '385'],
  ['1-9', '上衣', '386'],
  ['1-9', '上衣', '402'],
  ['1-9', '上衣', '403'],
  ['1-9', '连衣裙', '491'],
  ['1-9', '连衣裙', '577'],
  ['1-9', '连衣裙', '127'],
  ['1-9', '连衣裙', '130'],
  ['1-9', '外套', '225'],
  ['1-9', '下装', '332'],
  ['1-9', '下装', '333'],
  ['1-9', '上衣', '353'],
  ['1-9', '上衣', '401'],
  ['1-9', '连衣裙', '406'],
  ['1-9', '连衣裙', '418'],
  ['1-9', '上衣', '438'],
  ['1-9', '连衣裙', '489'],
  ['1-9', '连衣裙', '490'],
  ['2-1', '下装', '351'],
  ['2-1', '下装', '352'],
  ['2-1', '上衣', '379'],
  ['2-1', '上衣', '380'],
  ['2-1', '上衣', '381'],
  ['2-1', '连衣裙', '570'],
  ['2-1', '连衣裙', '591'],
  ['2-1', '连衣裙', '592'],
  ['2-1', '连衣裙', '593'],
  ['2-1', '连衣裙', '594'],
  ['2-1', '连衣裙', '595'],
  ['2-1', '连衣裙', '605'],
  ['2-1', '连衣裙', '623'],
  ['2-1', '连衣裙', '624'],
  ['2-1', '连衣裙', '725'],
  ['2-1', '连衣裙', '727'],
  ['2-1', '连衣裙', '728'],
  ['2-1', '连衣裙', '739'],
  ['2-1', '下装', '350'],
  ['2-1', '连衣裙', '598'],
  ['2-1', '连衣裙', '600'],
  ['2-1', '上衣', '271'],
  ['2-1', '下装', '260'],
  ['2-2', '外套', '220'],
  ['2-2', '外套', '221'],
  ['2-2', '连衣裙', '401'],
  ['2-2', '连衣裙', '402'],
  ['2-2', '连衣裙', '403'],
  ['2-2', '连衣裙', '404'],
  ['2-2', '上衣', '417'],
  ['2-2', '连衣裙', '027'],
  ['2-2', '连衣裙', '028'],
  ['2-2', '连衣裙', '060'],
  ['2-3', '连衣裙', '176'],
  ['2-3', '连衣裙', '181'],
  ['2-3', '外套', '215'],
  ['2-3', '外套', '223'],
  ['2-3', '连衣裙', '259'],
  ['2-3', '外套', '261'],
  ['2-3', '下装', '334'],
  ['2-3', '下装', '368'],
  ['2-3', '连衣裙', '398'],
  ['2-3', '上衣', '400'],
  ['2-3', '连衣裙', '482'],
  ['2-3', '连衣裙', '483'],
  ['2-3', '连衣裙', '484'],
  ['2-3', '连衣裙', '602'],
  ['2-3', '连衣裙', '640'],
  ['2-3', '外套', '213'],
  ['2-3', '外套', '214'],
  ['2-3', '外套', '226'],
  ['2-3', '外套', '227'],
  ['2-4', '外套', '220'],
  ['2-4', '外套', '221'],
  ['2-4', '连衣裙', '331'],
  ['2-4', '下装', '351'],
  ['2-4', '下装', '352'],
  ['2-4', '下装', '376'],
  ['2-4', '上衣', '379'],
  ['2-4', '上衣', '380'],
  ['2-4', '上衣', '381'],
  ['2-4', '连衣裙', '480'],
  ['2-4', '连衣裙', '518'],
  ['2-4', '连衣裙', '519'],
  ['2-4', '下装', '350'],
  ['2-4', '上衣', '407'],
  ['2-5', '外套', '220'],
  ['2-5', '上衣', '361'],
  ['2-5', '上衣', '385'],
  ['2-5', '上衣', '386'],
  ['2-5', '连衣裙', '401'],
  ['2-5', '连衣裙', '402'],
  ['2-5', '连衣裙', '403'],
  ['2-5', '连衣裙', '404'],
  ['2-5', '连衣裙', '520'],
  ['2-6', '连衣裙', '127'],
  ['2-6', '连衣裙', '480'],
  ['2-6', '连衣裙', '481'],
  ['2-6', '连衣裙', '680'],
  ['2-6', '连衣裙', '381'],
  ['2-7', '连衣裙', '152'],
  ['2-7', '外套', '221'],
  ['2-7', '外套', '236'],
  ['2-7', '连衣裙', '351'],
  ['2-7', '连衣裙', '352'],
  ['2-7', '连衣裙', '353'],
  ['2-8', '上衣', '302'],
  ['2-8', '上衣', '303'],
  ['2-8', '连衣裙', '318'],
  ['2-8', '下装', '337'],
  ['2-8', '连衣裙', '343'],
  ['2-8', '下装', '375'],
  ['2-8', '连衣裙', '381'],
  ['2-8', '上衣', '408'],
  ['2-8', '连衣裙', '413'],
  ['2-8', '连衣裙', '414'],
  ['2-8', '连衣裙', '480'],
  ['2-8', '连衣裙', '481'],
  ['2-8', '连衣裙', '512'],
  ['2-8', '连衣裙', '678'],
  ['2-8', '连衣裙', '679'],
  ['2-8', '连衣裙', '680'],
  ['2-8', '连衣裙', '681'],
  ['2-8', '连衣裙', '682'],
  ['2-8', '连衣裙', '683'],
  ['2-8', '连衣裙', '716'],
  ['2-8', '下装', '063'],
  ['2-8', '连衣裙', '065'],
  ['2-8', '连衣裙', '067'],
  ['2-8', '下装', '389'],
  ['2-8', '连衣裙', '583'],
  ['2-8', '连衣裙', '598'],
  ['2-8', '连衣裙', '650'],
  ['2-8', '连衣裙', '654'],
  ['2-8', '连衣裙', '064'],
  ['2-8', '连衣裙', '319'],
  ['2-8', '连衣裙', '320'],
  ['2-8', '连衣裙', '321'],
  ['2-9', '连衣裙', '134'],
  ['2-9', '外套', '217'],
  ['2-9', '外套', '239'],
  ['2-9', '连衣裙', '409'],
  ['2-9', '连衣裙', '573'],
  ['2-9', '连衣裙', '631'],
  ['2-9', '连衣裙', '033'],
  ['2-9', '连衣裙', '040'],
  ['2-9', '连衣裙', '041'],
  ['2-9', '连衣裙', '042'],
  ['2-9', '连衣裙', '137'],
  ['2-9', '连衣裙', '603'],
  ['2-支1', '外套', '254'],
  ['2-支1', '下装', '379'],
  ['2-支1', '下装', '385'],
  ['2-支1', '下装', '385'],
  ['2-支1', '连衣裙', '398'],
  ['2-支1', '连衣裙', '409'],
  ['2-支1', '连衣裙', '412'],
  ['2-支1', '上衣', '412'],
  ['2-支1', '上衣', '412'],
  ['2-支1', '上衣', '434'],
  ['2-支1', '上衣', '435'],
  ['2-支1', '上衣', '436'],
  ['2-支1', '上衣', '436'],
  ['2-支1', '连衣裙', '546'],
  ['2-支1', '连衣裙', '573'],
  ['2-支1', '连衣裙', '588'],
  ['2-支1', '连衣裙', '589'],
  ['2-支1', '连衣裙', '590'],
  ['2-支1', '连衣裙', '639'],
  ['2-支1', '连衣裙', '640'],
  ['2-支1', '连衣裙', '696'],
  ['2-支1', '连衣裙', '697'],
  ['2-支1', '连衣裙', '603'],
  ['2-支1', '连衣裙', '652'],
  ['2-支1', '连衣裙', '655'],
  ['2-支1', '连衣裙', '696'],
  ['2-支1', '连衣裙', '697'],
  ['2-支1', '连衣裙', '695'],
  ['2-支1', '连衣裙', '694'],
  ['2-支1', '连衣裙', '662'],
  ['2-支2', '外套', '215'],
  ['2-支2', '下装', '008'],
  ['3-1', '上衣', '350'],
  ['3-1', '连衣裙', '356'],
  ['3-1', '连衣裙', '377'],
  ['3-1', '连衣裙', '393'],
  ['3-1', '连衣裙', '482'],
  ['3-1', '连衣裙', '483'],
  ['3-1', '连衣裙', '484'],
  ['3-1', '连衣裙', '499'],
  ['3-1', '连衣裙', '500'],
  ['3-1', '连衣裙', '501'],
  ['3-1', '连衣裙', '502'],
  ['3-1', '连衣裙', '698'],
  ['3-1', '连衣裙', '705'],
  ['3-1', '连衣裙', '060'],
  ['3-1', '外套', '213'],
  ['3-1', '外套', '214'],
  ['3-1', '外套', '226'],
  ['3-1', '外套', '227'],
  ['3-1', '连衣裙', '340'],
  ['3-1', '连衣裙', '341'],
  ['3-1', '连衣裙', '349'],
  ['3-1', '上衣', '455'],
  ['3-1', '连衣裙', '731'],
  ['3-1', '连衣裙', '733'],
  ['3-1', '连衣裙', '732'],
  ['3-2', '下装', '335'],
  ['3-2', '下装', '341'],
  ['3-2', '下装', '342'],
  ['3-2', '下装', '409'],
  ['3-2', '下装', '410'],
  ['3-2', '连衣裙', '577'],
  ['3-2', '连衣裙', '070'],
  ['3-2', '下装', '093'],
  ['3-2', '下装', '247'],
  ['3-2', '连衣裙', '490'],
  ['3-3', '连衣裙', '482'],
  ['3-3', '连衣裙', '483'],
  ['3-3', '外套', '226'],
  ['3-3', '外套', '227'],
  ['3-3', '连衣裙', '484'],
  ['3-4', '连衣裙', '225'],
  ['3-4', '上衣', '309'],
  ['3-4', '上衣', '310'],
  ['3-4', '上衣', '311'],
  ['3-4', '下装', '375'],
  ['3-4', '上衣', '408'],
  ['3-4', '连衣裙', '413'],
  ['3-4', '下装', '414'],
  ['3-4', '连衣裙', '414'],
  ['3-4', '外套', '213'],
  ['3-4', '外套', '214'],
  ['3-4', '外套', '226'],
  ['3-4', '外套', '227'],
  ['3-4', '外套', '260'],
  ['3-4', '连衣裙', '435'],
  ['3-4', '连衣裙', '436'],
  ['3-4', '连衣裙', '591'],
  ['3-4', '连衣裙', '592'],
  ['3-4', '连衣裙', '593'],
  ['3-4', '连衣裙', '594'],
  ['3-4', '连衣裙', '595'],
  ['3-5', '连衣裙', '401'],
  ['3-5', '连衣裙', '402'],
  ['3-5', '连衣裙', '403'],
  ['3-5', '上衣', '424'],
  ['3-5', '下装', '004'],
  ['3-5', '下装', '049'],
  ['3-5', '下装', '095'],
  ['3-5', '连衣裙', '149'],
  ['3-5', '下装', '240'],
  ['3-5', '上衣', '256'],
  ['3-5', '连衣裙', '404'],
  ['3-7', '下装', '375'],
  ['3-7', '连衣裙', '384'],
  ['3-7', '上衣', '408'],
  ['3-7', '连衣裙', '413'],
  ['3-7', '下装', '414'],
  ['3-7', '上衣', '450'],
  ['3-7', '连衣裙', '460'],
  ['3-7', '连衣裙', '549'],
  ['3-7', '连衣裙', '586'],
  ['3-7', '连衣裙', '587'],
  ['3-7', '连衣裙', '588'],
  ['3-7', '连衣裙', '589'],
  ['3-7', '连衣裙', '590'],
  ['3-7', '连衣裙', '628'],
  ['3-7', '外套', '314'],
  ['3-7', '下装', '389'],
  ['3-7', '连衣裙', '391'],
  ['3-7', '连衣裙', '414'],
  ['3-7', '连衣裙', '583'],
  ['3-7', '连衣裙', '591'],
  ['3-7', '连衣裙', '592'],
  ['3-7', '连衣裙', '593'],
  ['3-7', '连衣裙', '594'],
  ['3-7', '连衣裙', '595'],
  ['3-7', '连衣裙', '598'],
  ['3-7', '连衣裙', '654'],
  ['3-7', '连衣裙', '381'],
  ['3-8', '连衣裙', '221'],
  ['3-8', '连衣裙', '328'],
  ['3-8', '下装', '001'],
  ['3-8', '下装', '004'],
  ['3-8', '上衣', '080'],
  ['3-8', '连衣裙', '116'],
  ['3-8', '连衣裙', '139'],
  ['3-8', '连衣裙', '149'],
  ['3-8', '上衣', '240'],
  ['3-8', '上衣', '449'],
  ['3-8', '下装', '413'],
  ['3-8', '连衣裙', '098'],
  ['3-9', '外套', '213'],
  ['3-9', '下装', '286'],
  ['3-9', '下装', '371'],
  ['3-9', '上衣', '092'],
  ['3-9', '外套', '214'],
  ['3-9', '下装', '368'],
  ['3-9', '连衣裙', '577'],
  ['3-10', '下装', '351'],
  ['3-10', '下装', '352'],
  ['3-10', '上衣', '379'],
  ['3-10', '上衣', '380'],
  ['3-10', '上衣', '381'],
  ['3-10', '连衣裙', '623'],
  ['3-10', '下装', '350'],
  ['3-10', '连衣裙', '605'],
  ['3-11', '外套', '217'],
  ['3-11', '连衣裙', '409'],
  ['3-11', '连衣裙', '572'],
  ['3-11', '连衣裙', '573'],
  ['3-11', '连衣裙', '574'],
  ['3-11', '连衣裙', '575'],
  ['3-11', '连衣裙', '032'],
  ['3-11', '连衣裙', '033'],
  ['3-11', '连衣裙', '038'],
  ['3-11', '连衣裙', '040'],
  ['3-11', '连衣裙', '041'],
  ['3-11', '连衣裙', '042'],
  ['3-11', '连衣裙', '076'],
  ['3-11', '外套', '239'],
  ['3-11', '连衣裙', '603'],
  ['3-12', '连衣裙', '401'],
  ['3-12', '连衣裙', '402'],
  ['3-12', '连衣裙', '403'],
  ['3-12', '连衣裙', '027'],
  ['3-12', '下装', '318'],
  ['3-12', '上衣', '339'],
  ['3-12', '连衣裙', '372'],
  ['3-12', '连衣裙', '404'],
  ['3-支1', '连衣裙', '061'],
  ['3-支1', '连衣裙', '496'],
  ['3-支2', '连衣裙', '492'],
  ['3-支2', '连衣裙', '587'],
  ['3-支2', '连衣裙', '588'],
  ['3-支2', '连衣裙', '589'],
  ['3-支2', '连衣裙', '590'],
  ['3-支2', '连衣裙', '702'],
  ['3-支2', '连衣裙', '493'],
  ['3-支2', '连衣裙', '494'],
  ['4-1', '上衣', '268'],
  ['4-1', '连衣裙', '027'],
  ['4-1', '连衣裙', '027'],
  ['4-3', '外套', '217'],
  ['4-3', '外套', '239'],
  ['4-4', '连衣裙', '343'],
  ['4-4', '下装', '375'],
  ['4-4', '上衣', '408'],
  ['4-4', '连衣裙', '480'],
  ['4-4', '连衣裙', '591'],
  ['4-4', '连衣裙', '592'],
  ['4-4', '连衣裙', '593'],
  ['4-4', '连衣裙', '594'],
  ['4-4', '连衣裙', '595'],
  ['4-4', '连衣裙', '598'],
  ['4-5', '下装', '103'],
  ['4-5', '连衣裙', '328'],
  ['4-5', '上衣', '004'],
  ['4-5', '下装', '086'],
  ['4-5', '下装', '212'],
  ['4-6', '连衣裙', '180'],
  ['4-6', '外套', '217'],
  ['4-6', '外套', '225'],
  ['4-6', '上衣', '243'],
  ['4-6', '连衣裙', '342'],
  ['4-6', '上衣', '356'],
  ['4-6', '下装', '362'],
  ['4-6', '下装', '366'],
  ['4-6', '下装', '368'],
  ['4-6', '上衣', '391'],
  ['4-6', '上衣', '394'],
  ['4-6', '连衣裙', '398'],
  ['4-6', '连衣裙', '495'],
  ['4-6', '连衣裙', '573'],
  ['4-6', '连衣裙', '574'],
  ['4-6', '连衣裙', '575'],
  ['4-6', '连衣裙', '585'],
  ['4-6', '连衣裙', '645'],
  ['4-6', '连衣裙', '652'],
  ['4-6', '连衣裙', '024'],
  ['4-6', '连衣裙', '032'],
  ['4-6', '连衣裙', '033'],
  ['4-6', '下装', '064'],
  ['4-6', '连衣裙', '073'],
  ['4-6', '连衣裙', '074'],
  ['4-6', '连衣裙', '075'],
  ['4-6', '连衣裙', '174'],
  ['4-6', '外套', '239'],
  ['4-6', '下装', '349'],
  ['4-6', '上衣', '378'],
  ['4-6', '上衣', '423'],
  ['4-6', '连衣裙', '492'],
  ['4-6', '连衣裙', '493'],
  ['4-6', '连衣裙', '494'],
  ['4-6', '连衣裙', '541'],
  ['4-6', '连衣裙', '572'],
  ['4-6', '连衣裙', '639'],
  ['4-6', '连衣裙', '640'],
  ['4-7', '连衣裙', '126'],
  ['4-7', '连衣裙', '397'],
  ['4-7', '连衣裙', '412'],
  ['4-7', '连衣裙', '064'],
  ['4-7', '连衣裙', '065'],
  ['4-7', '上衣', '090'],
  ['4-7', '连衣裙', '278'],
  ['4-7', '连衣裙', '578'],
  ['4-7', '连衣裙', '584'],
  ['4-9', '连衣裙', '571'],
  ['4-9', '连衣裙', '583'],
  ['4-9', '连衣裙', '584'],
  ['4-11', '下装', '148'],
  ['4-11', '外套', '213'],
  ['4-11', '外套', '214'],
  ['4-11', '外套', '226'],
  ['4-11', '外套', '227'],
  ['4-11', '下装', '344'],
  ['4-11', '连衣裙', '503'],
  ['4-11', '连衣裙', '504'],
  ['4-11', '连衣裙', '505'],
  ['4-11', '连衣裙', '506'],
  ['4-11', '连衣裙', '508'],
  ['4-11', '连衣裙', '509'],
  ['4-11', '上衣', '004'],
  ['4-11', '连衣裙', '072'],
  ['4-11', '连衣裙', '340'],
  ['4-11', '连衣裙', '341'],
  ['4-11', '连衣裙', '507'],
  ['4-支1', '连衣裙', '124'],
  ['4-支1', '连衣裙', '125'],
  ['4-支1', '下装', '338'],
  ['4-支1', '下装', '351'],
  ['4-支1', '下装', '352'],
  ['4-支1', '下装', '369'],
  ['4-支1', '上衣', '379'],
  ['4-支1', '上衣', '380'],
  ['4-支1', '上衣', '381'],
  ['4-支1', '连衣裙', '537'],
  ['4-支1', '连衣裙', '570'],
  ['4-支1', '连衣裙', '600'],
  ['4-支1', '连衣裙', '624'],
  ['4-支1', '连衣裙', '067'],
  ['4-支1', '连衣裙', '133'],
  ['4-支1', '下装', '350'],
  ['4-支1', '连衣裙', '605'],
  ['4-支1', '连衣裙', '623'],
  ['4-支2', '下装', '095'],
  ['4-支2', '下装', '103'],
  ['4-支2', '下装', '331'],
  ['4-支2', '上衣', '351'],
  ['4-支3', '下装', '350'],
  ['4-支3', '下装', '351'],
  ['4-支3', '下装', '352'],
  ['4-支3', '上衣', '379'],
  ['4-支3', '上衣', '380'],
  ['4-支3', '上衣', '381'],
  ['4-支3', '下装', '026'],
  ['4-支3', '下装', '027'],
  ['4-支3', '下装', '028'],
  ['5-1', '连衣裙', '158'],
  ['5-1', '连衣裙', '328'],
  ['5-1', '下装', '095'],
  ['5-1', '下装', '103'],
  ['5-1', '连衣裙', '149'],
  ['5-1', '连衣裙', '157'],
  ['5-1', '连衣裙', '221'],
  ['5-1', '下装', '240'],
  ['5-1', '上衣', '256'],
  ['5-1', '连衣裙', '404'],
  ['5-2', '外套', '213'],
  ['5-2', '外套', '214'],
  ['5-2', '外套', '227'],
  ['5-2', '连衣裙', '483'],
  ['5-2', '连衣裙', '484'],
  ['5-2', '连衣裙', '508'],
  ['5-2', '连衣裙', '509'],
  ['5-2', '外套', '214'],
  ['5-2', '外套', '226'],
  ['5-2', '连衣裙', '482'],
  ['5-2', '连衣裙', '507'],
  ['5-4', '外套', '239'],
  ['5-4', '外套', '050'],
  ['5-4', '外套', '051'],
  ['5-4', '外套', '052'],
  ['5-4', '外套', '057'],
  ['5-4', '外套', '205'],
  ['5-4', '连衣裙', '492'],
  ['5-4', '连衣裙', '493'],
  ['5-4', '连衣裙', '494'],
  ['5-6', '连衣裙', '270'],
  ['5-6', '连衣裙', '551'],
  ['5-7', '连衣裙', '125'],
  ['5-7', '连衣裙', '704'],
  ['5-8', '连衣裙', '181'],
  ['5-8', '连衣裙', '203'],
  ['5-8', '连衣裙', '314'],
  ['5-8', '连衣裙', '315'],
  ['5-8', '连衣裙', '062'],
  ['5-8', '上衣', '253'],
  ['5-8', '连衣裙', '296'],
  ['5-8', '上衣', '373'],
  ['5-8', '连衣裙', '507'],
  ['5-8', '连衣裙', '508'],
  ['5-8', '连衣裙', '509'],
  ['5-8', '上衣', '455'],
  ['5-9', '连衣裙', '223'],
  ['5-9', '连衣裙', '492'],
  ['5-9', '连衣裙', '495'],
  ['5-9', '连衣裙', '586'],
  ['5-9', '连衣裙', '586'],
  ['5-9', '连衣裙', '587'],
  ['5-9', '连衣裙', '587'],
  ['5-9', '连衣裙', '588'],
  ['5-9', '连衣裙', '588'],
  ['5-9', '连衣裙', '589'],
  ['5-9', '连衣裙', '589'],
  ['5-9', '连衣裙', '590'],
  ['5-9', '连衣裙', '590'],
  ['5-9', '连衣裙', '406'],
  ['5-9', '连衣裙', '596'],
  ['5-10', '下装', '375'],
  ['5-10', '上衣', '408'],
  ['5-10', '连衣裙', '581'],
  ['5-10', '连衣裙', '586'],
  ['5-10', '连衣裙', '587'],
  ['5-10', '连衣裙', '588'],
  ['5-10', '连衣裙', '589'],
  ['5-10', '连衣裙', '590'],
  ['5-10', '连衣裙', '239'],
  ['5-10', '连衣裙', '481'],
  ['5-10', '连衣裙', '583'],
  ['5-10', '连衣裙', '591'],
  ['5-10', '连衣裙', '592'],
  ['5-10', '连衣裙', '593'],
  ['5-10', '连衣裙', '594'],
  ['5-10', '连衣裙', '595'],
  ['5-10', '连衣裙', '615'],
  ['5-10', '连衣裙', '650'],
  ['5-10', '连衣裙', '654'],
  ['5-11', '下装', '086'],
  ['5-11', '上衣', '347'],
  ['5-12', '下装', '329'],
  ['5-12', '下装', '330'],
  ['5-12', '连衣裙', '167'],
  ['5-12', '外套', '205'],
  ['5-12', '连衣裙', '264'],
  ['5-12', '上衣', '350'],
  ['5-12', '下装', '376'],
  ['5-12', '下装', '385'],
  ['5-12', '连衣裙', '393'],
  ['5-12', '下装', '393'],
  ['5-12', '连衣裙', '394'],
  ['5-12', '上衣', '409'],
  ['5-12', '连衣裙', '602'],
  ['5-支1', '连衣裙', '268'],
  ['5-支1', '连衣裙', '274'],
  ['5-支1', '下装', '351'],
  ['5-支1', '下装', '352'],
  ['5-支1', '上衣', '379'],
  ['5-支1', '上衣', '380'],
  ['5-支1', '上衣', '381'],
  ['5-支1', '连衣裙', '731'],
  ['5-支1', '连衣裙', '732'],
  ['5-支1', '连衣裙', '733'],
  ['5-支1', '连衣裙', '027'],
  ['5-支1', '连衣裙', '143'],
  ['5-支1', '连衣裙', '159'],
  ['5-支1', '连衣裙', '187'],
  ['5-支1', '连衣裙', '209'],
  ['5-支1', '连衣裙', '249'],
  ['5-支1', '连衣裙', '251'],
  ['5-支1', '连衣裙', '270'],
  ['5-支1', '连衣裙', '347'],
  ['5-支1', '下装', '350'],
  ['5-支1', '下装', '389'],
  ['5-支1', '连衣裙', '435'],
  ['5-支1', '上衣', '455'],
  ['5-支2', '外套', '102'],
  ['5-支2', '下装', '331'],
  ['5-支2', '上衣', '341'],
  ['5-支2', '上衣', '349'],
  ['5-支2', '上衣', '351'],
  ['5-支2', '连衣裙', '371'],
  ['5-支2', '连衣裙', '401'],
  ['5-支2', '连衣裙', '402'],
  ['5-支2', '连衣裙', '403'],
  ['5-支2', '下装', '414'],
  ['5-支2', '上衣', '417'],
  ['5-支2', '上衣', '421'],
  ['5-支2', '外套', '008'],
  ['5-支2', '下装', '095'],
  ['5-支2', '下装', '098'],
  ['5-支2', '下装', '113'],
  ['5-支2', '下装', '113'],
  ['5-支2', '连衣裙', '158'],
  ['5-支2', '外套', '233'],
  ['5-支2', '上衣', '248'],
  ['5-支2', '上衣', '256'],
  ['5-支2', '连衣裙', '372'],
  ['5-支2', '连衣裙', '404'],
  ['5-支3', '外套', '227'],
  ['5-支3', '外套', '226'],
  ['6-1', '下装', '351'],
  ['6-1', '下装', '352'],
  ['6-1', '上衣', '379'],
  ['6-1', '上衣', '380'],
  ['6-1', '上衣', '381'],
  ['6-1', '下装', '408'],
  ['6-1', '上衣', '421'],
  ['6-1', '连衣裙', '537'],
  ['6-1', '连衣裙', '624'],
  ['6-1', '连衣裙', '731'],
  ['6-1', '连衣裙', '732'],
  ['6-1', '连衣裙', '733'],
  ['6-1', '外套', '219'],
  ['6-1', '下装', '350'],
  ['6-1', '连衣裙', '598'],
  ['6-2', '连衣裙', '340'],
  ['6-2', '连衣裙', '341'],
  ['6-2', '连衣裙', '356'],
  ['6-2', '连衣裙', '571'],
  ['6-3', '连衣裙', '305'],
  ['6-3', '连衣裙', '414'],
  ['6-3', '连衣裙', '480'],
  ['6-3', '连衣裙', '481'],
  ['6-3', '连衣裙', '413'],
  ['6-3', '连衣裙', '479'],
  ['6-4', '外套', '220'],
  ['6-4', '外套', '221'],
  ['6-4', '下装', '331'],
  ['6-4', '上衣', '351'],
  ['6-4', '上衣', '375'],
  ['6-4', '上衣', '376'],
  ['6-4', '连衣裙', '027'],
  ['6-4', '连衣裙', '028'],
  ['6-4', '上衣', '080'],
  ['6-4', '上衣', '410'],
  ['6-5', '下装', '408'],
  ['6-5', '上衣', '443'],
  ['6-5', '上衣', '444'],
  ['6-5', '连衣裙', '570'],
  ['6-5', '连衣裙', '619'],
  ['6-5', '连衣裙', '634'],
  ['6-6', '上衣', '118'],
  ['6-6', '上衣', '132'],
  ['6-6', '上衣', '133'],
  ['6-6', '下装', '136'],
  ['6-6', '外套', '217'],
  ['6-6', '外套', '239'],
  ['6-6', '下装', '240'],
  ['6-6', '上衣', '307'],
  ['6-6', '下装', '315'],
  ['6-6', '下装', '319'],
  ['6-6', '上衣', '341'],
  ['6-6', '下装', '413'],
  ['6-6', '上衣', '449'],
  ['6-6', '下装', '004'],
  ['6-6', '下装', '031'],
  ['6-6', '下装', '070'],
  ['6-6', '连衣裙', '094'],
  ['6-6', '下装', '095'],
  ['6-6', '上衣', '099'],
  ['6-6', '下装', '103'],
  ['6-6', '下装', '140'],
  ['6-6', '下装', '141'],
  ['6-6', '上衣', '417'],
  ['6-6', '连衣裙', '372'],
  ['6-7', '外套', '140'],
  ['6-7', '下装', '338'],
  ['6-7', '下装', '351'],
  ['6-7', '下装', '352'],
  ['6-7', '下装', '376'],
  ['6-7', '上衣', '379'],
  ['6-7', '上衣', '380'],
  ['6-7', '上衣', '381'],
  ['6-7', '连衣裙', '537'],
  ['6-7', '连衣裙', '619'],
  ['6-7', '连衣裙', '624'],
  ['6-7', '外套', '045'],
  ['6-7', '外套', '046'],
  ['6-7', '下装', '350'],
  ['6-7', '上衣', '421'],
  ['6-7', '连衣裙', '460'],
  ['6-7', '连衣裙', '496'],
  ['6-8', '外套', '214'],
  ['6-8', '外套', '224'],
  ['6-8', '外套', '227'],
  ['6-8', '外套', '213'],
  ['6-8', '外套', '226'],
  ['6-9', '外套', '125'],
  ['6-9', '外套', '205'],
  ['6-10', '下装', '414'],
  ['6-10', '上衣', '421'],
  ['6-10', '上衣', '450'],
  ['6-10', '连衣裙', '619'],
  ['6-10', '连衣裙', '624'],
  ['6-10', '下装', '389'],
  ['6-支1', '连衣裙', '577'],
  ['6-支1', '连衣裙', '596'],
  ['6-支2', '下装', '408'],
  ['6-支2', '上衣', '443'],
  ['6-支2', '上衣', '437'],
  ['7-1', '连衣裙', '291'],
  ['7-1', '连衣裙', '292'],
  ['7-1', '上衣', '352'],
  ['7-1', '连衣裙', '355'],
  ['7-1', '下装', '368'],
  ['7-1', '连衣裙', '678'],
  ['7-1', '连衣裙', '679'],
  ['7-1', '连衣裙', '680'],
  ['7-1', '连衣裙', '682'],
  ['7-1', '连衣裙', '683'],
  ['7-1', '连衣裙', '683'],
  ['7-1', '连衣裙', '725'],
  ['7-1', '连衣裙', '080'],
  ['7-1', '外套', '224'],
  ['7-1', '连衣裙', '259'],
  ['7-1', '连衣裙', '282'],
  ['7-1', '连衣裙', '308'],
  ['7-2', '外套', '018'],
  ['7-2', '外套', '035'],
  ['7-2', '外套', '082'],
  ['7-2', '外套', '163'],
  ['7-2', '外套', '201'],
  ['7-2', '外套', '202'],
  ['7-3', '连衣裙', '282'],
  ['7-3', '上衣', '438'],
  ['7-3', '连衣裙', '503'],
  ['7-4', '连衣裙', '585'],
  ['7-4', '连衣裙', '571'],
  ['7-4', '连衣裙', '584'],
  ['7-5', '连衣裙', '401'],
  ['7-5', '连衣裙', '402'],
  ['7-5', '连衣裙', '403'],
  ['7-5', '下装', '103'],
  ['7-5', '连衣裙', '404'],
  ['7-6', '连衣裙', '396'],
  ['7-6', '连衣裙', '040'],
  ['7-6', '连衣裙', '041'],
  ['7-6', '连衣裙', '042'],
  ['7-6', '连衣裙', '174'],
  ['7-8', '外套', '037'],
  ['7-8', '外套', '159'],
  ['7-8', '外套', '036'],
  ['7-9', '连衣裙', '435'],
  ['7-9', '连衣裙', '436'],
  ['7-9', '连衣裙', '143'],
  ['7-9', '连衣裙', '155'],
  ['7-9', '连衣裙', '156'],
  ['7-9', '上衣', '455'],
  ['7-9', '连衣裙', '733'],
  ['7-支1', '上衣', '158'],
  ['7-支1', '下装', '204'],
  ['7-支1', '连衣裙', '264'],
  ['7-支1', '上衣', '309'],
  ['7-支1', '上衣', '310'],
  ['7-支1', '上衣', '311'],
  ['7-支1', '下装', '336'],
  ['7-支1', '下装', '344'],
  ['7-支1', '连衣裙', '483'],
  ['7-支1', '连衣裙', '484'],
  ['7-支1', '连衣裙', '484'],
  ['7-支1', '上衣', '158'],
  ['7-支1', '连衣裙', '340'],
  ['7-支1', '连衣裙', '341'],
  ['7-支1', '连衣裙', '482'],
  ['7-支1', '连衣裙', '725'],
  ['7-支2', '下装', '375'],
  ['7-支2', '上衣', '408'],
  ['7-支2', '连衣裙', '479'],
  ['7-支2', '连衣裙', '480'],
  ['7-支2', '连衣裙', '481'],
  ['7-支2', '连衣裙', '598'],
  ['7-支4', '下装', '376'],
  ['7-支4', '上衣', '409'],
  ['7-支4', '连衣裙', '602'],
  ['8-2', '特殊·头部', '262'],
  ['8-4', '上衣', '191'],
  ['8-4', '上衣', '041'],
  ['8-4', '上衣', '042'],
  ['8-4', '上衣', '043'],
  ['8-4', '下装', '050'],
  ['8-4', '下装', '199'],
  ['8-4', '下装', '241'],
  ['8-4', '上衣', '340'],
  ['8-5', '下装', '328'],
  ['8-5', '上衣', '348'],
  ['8-5', '连衣裙', '377'],
  ['8-5', '连衣裙', '413'],
  ['8-5', '连衣裙', '429'],
  ['8-5', '连衣裙', '583'],
  ['8-6', '外套', '202'],
  ['8-6', '外套', '205'],
  ['8-7', '特殊·头部', '262'],
  ['8-8', '连衣裙', '567'],
  ['8-8', '连衣裙', '670'],
  ['8-8', '连衣裙', '702'],
  ['8-8', '连衣裙', '080'],
  ['8-9', '特殊·头部', '262'],
  ['8-9', '下装', '375'],
  ['8-9', '上衣', '408'],
  ['8-支1', '上衣', '346'],
  ['8-支1', '上衣', '347'],
  ['8-支2', '外套', '260'],
  ['8-支2', '特殊·头部', '262'],
  ['8-支3', '外套', '217'],
  ['8-支3', '特殊·头部', '262'],
  ['8-支3', '连衣裙', '409'],
  ['8-支3', '连衣裙', '625'],
  ['8-支3', '连衣裙', '626'],
  ['8-支3', '外套', '239'],
  ['9-1', '上衣', '449'],
  ['9-1', '下装', '004'],
  ['9-1', '连衣裙', '006'],
  ['9-1', '连衣裙', '149'],
  ['9-4', '连衣裙', '585'],
  ['9-4', '连衣裙', '535'],
  ['9-4', '连衣裙', '584'],
  ['9-5', '外套', '140'],
  ['9-5', '外套', '075'],
  ['9-5', '外套', '150'],
  ['9-6-1', '外套', '213'],
  ['9-6-1', '外套', '214'],
  ['9-6-1', '外套', '215'],
  ['9-6-1', '外套', '226'],
  ['9-6-1', '外套', '227'],
  ['9-6-1', '连衣裙', '356'],
  ['9-6-1', '连衣裙', '482'],
  ['9-6-1', '连衣裙', '484'],
  ['9-6-1', '连衣裙', '616'],
  ['9-6-1', '连衣裙', '259'],
  ['9-6-1', '连衣裙', '415'],
  ['9-6-1', '连衣裙', '416'],
  ['9-6-1', '连衣裙', '417'],
  ['9-6-1', '连衣裙', '483'],
  ['9-6-1', '连衣裙', '492'],
  ['9-6-1', '连衣裙', '553'],
  ['9-6-1', '连衣裙', '554'],
  ['9-6-2', '外套', '213'],
  ['9-6-2', '外套', '214'],
  ['9-6-2', '外套', '224'],
  ['9-6-2', '外套', '226'],
  ['9-6-2', '外套', '227'],
  ['9-7', '外套', '003'],
  ['9-8', '连衣裙', '435'],
  ['9-8', '连衣裙', '436'],
  ['9-9-1', '外套', '149'],
  ['9-9-2', '下装', '351'],
  ['9-9-2', '下装', '352'],
  ['9-9-2', '上衣', '379'],
  ['9-9-2', '上衣', '380'],
  ['9-9-2', '上衣', '381'],
  ['9-9-2', '下装', '350'],
  ['9-9-3', '外套', '231'],
  ['9-9-3', '外套', '232'],
  ['9-9-3', '连衣裙', '628'],
  ['9-9-3', '外套', '230'],
  ['9-9-3', '连衣裙', '430'],
  ['9-支2', '外套', '218'],
  ['9-支2', '外套', '218'],
  ['9-支2', '外套', '078'],
  ['9-支3', '上衣', '384'],
  ['9-支3', '上衣', '385'],
  ['9-支3', '上衣', '386'],
  ['9-支3', '上衣', '438'],
  ['10-2', '连衣裙', '271'],
  ['10-2', '连衣裙', '272'],
  ['10-2', '连衣裙', '275'],
  ['10-2', '连衣裙', '276'],
  ['10-3', '外套', '140'],
  ['10-3', '外套', '200'],
  ['10-3', '外套', '202'],
  ['10-3', '连衣裙', '305'],
  ['10-3', '下装', '329'],
  ['10-3', '下装', '330'],
  ['10-3', '上衣', '349'],
  ['10-3', '上衣', '350'],
  ['10-3', '连衣裙', '392'],
  ['10-3', '连衣裙', '393'],
  ['10-3', '连衣裙', '394'],
  ['10-3', '上衣', '421'],
  ['10-3', '外套', '201'],
  ['10-3', '下装', '376'],
  ['10-3', '上衣', '409'],
  ['10-3', '上衣', '417'],
  ['10-3', '连衣裙', '619'],
  ['10-3', '连衣裙', '624'],
  ['10-4', '外套', '011'],
  ['10-5', '外套', '213'],
  ['10-5', '外套', '214'],
  ['10-5', '外套', '226'],
  ['10-5', '外套', '227'],
  ['10-5', '连衣裙', '399'],
  ['10-5', '连衣裙', '557'],
  ['10-8', '外套', '240'],
  ['10-8', '外套', '243'],
  ['10-8', '外套', '246'],
  ['10-8', '外套', '247'],
  ['10-8', '外套', '248'],
  ['10-8', '外套', '249'],
  ['10-8', '外套', '262'],
  ['10-8', '外套', '263'],
  ['10-8', '外套', '021'],
  ['10-8', '外套', '022'],
  ['10-8', '外套', '023'],
  ['10-8', '外套', '266'],
  ['10-9-1', '外套', '149'],
  ['10-9-1', '外套', '233'],
  ['10-9-1', '外套', '050'],
  ['10-9-1', '外套', '070'],
  ['10-9-1', '外套', '078'],
  ['10-9-2', '上衣', '158'],
  ['10-9-2', '外套', '213'],
  ['10-9-2', '外套', '214'],
  ['10-9-2', '外套', '226'],
  ['10-9-2', '外套', '227'],
  ['10-9-2', '连衣裙', '482'],
  ['10-支1', '连衣裙', '401'],
  ['10-支1', '连衣裙', '402'],
  ['10-支1', '连衣裙', '403'],
  ['10-支1', '连衣裙', '404'],
  ['10-支2', '连衣裙', '374'],
  ['10-支2', '连衣裙', '376'],
  ['10-支2', '外套', '218'],
  ['10-支3', '连衣裙', '409'],
  ['10-支3', '连衣裙', '572'],
  ['10-支3', '连衣裙', '574'],
  ['10-支3', '连衣裙', '575'],
  ['10-支3', '连衣裙', '573'],
  ['10-支3', '连衣裙', '603'],
  ['11-1', '下装', '331'],
  ['11-1', '上衣', '351'],
  ['11-1', '连衣裙', '006'],
  ['11-1', '下装', '103'],
  ['11-2', '连衣裙', '152'],
  ['11-2', '连衣裙', '261'],
  ['11-2', '连衣裙', '351'],
  ['11-2', '连衣裙', '352'],
  ['11-2', '连衣裙', '353'],
  ['11-2', '连衣裙', '354'],
  ['11-2', '上衣', '379'],
  ['11-2', '下装', '383'],
  ['11-2', '连衣裙', '063'],
  ['11-2', '连衣裙', '098'],
  ['11-2', '下装', '109'],
  ['11-2', '连衣裙', '130'],
  ['11-2', '连衣裙', '131'],
  ['11-2', '连衣裙', '132'],
  ['11-2', '下装', '137'],
  ['11-2', '连衣裙', '139'],
  ['11-2', '下装', '140'],
  ['11-2', '下装', '213'],
  ['11-2', '连衣裙', '214'],
  ['11-2', '下装', '240'],
  ['11-2', '上衣', '258'],
  ['11-2', '连衣裙', '328'],
  ['11-2', '下装', '331'],
  ['11-2', '下装', '350'],
  ['11-2', '下装', '402'],
  ['11-2', '上衣', '437'],
  ['11-4', '下装', '384'],
  ['11-4', '上衣', '413'],
  ['11-4', '外套', '260'],
  ['11-4', '连衣裙', '270'],
  ['11-4', '连衣裙', '274'],
  ['11-4', '下装', '376'],
  ['11-4', '上衣', '409'],
  ['11-4', '连衣裙', '487'],
  ['11-4', '连衣裙', '488'],
  ['11-5', '外套', '137'],
  ['11-5', '外套', '201'],
  ['11-5', '外套', '202'],
  ['11-5', '外套', '223'],
  ['11-5', '外套', '169'],
  ['11-5', '外套', '300'],
  ['11-5', '外套', '301'],
  ['11-5', '外套', '266'],
  ['11-6', '下装', '368'],
  ['11-6', '上衣', '386'],
  ['11-6', '上衣', '385'],
  ['11-6', '上衣', '384'],
  ['11-6', '上衣', '438'],
  ['11-6', '连衣裙', '489'],
  ['11-6', '连衣裙', '490'],
  ['11-6', '连衣裙', '491'],
  ['11-7', '外套', '217'],
  ['11-7', '连衣裙', '409'],
  ['11-7', '连衣裙', '030'],
  ['11-7', '连衣裙', '032'],
  ['11-7', '外套', '239'],
  ['11-7', '连衣裙', '391'],
  ['11-7', '连衣裙', '603'],
  ['11-7', '连衣裙', '604'],
  ['11-8', '外套', '217'],
  ['11-9', '连衣裙', '403'],
  ['11-9', '下装', '103'],
  ['11-9', '连衣裙', '328'],
  ['11-9', '连衣裙', '401'],
  ['11-9', '连衣裙', '402'],
  ['11-9', '连衣裙', '404'],
  ['11-支1', '外套', '213'],
  ['11-支1', '外套', '214'],
  ['11-支1', '连衣裙', '725'],
  ['11-支1', '连衣裙', '727'],
  ['11-支1', '连衣裙', '728'],
  ['11-支1', '连衣裙', '739'],
  ['11-支1', '外套', '226'],
  ['11-支1', '外套', '227'],
  ['11-支1', '连衣裙', '264'],
  ['11-支1', '下装', '344'],
  ['11-支1', '连衣裙', '415'],
  ['11-支1', '上衣', '455'],
  ['11-支1', '连衣裙', '731'],
  ['6-1', '上衣', '455'],
  ['11-支2', '外套', '215'],
  ['12-4', '下装', '380'],
  ['12-4', '连衣裙', '480'],
  ['12-4', '连衣裙', '481'],
  ['12-4', '下装', '389'],
  ['12-4', '上衣', '409'],
  ['12-4', '上衣', '413'],
  ['12-4', '连衣裙', '479'],
  ['12-4', '连衣裙', '591'],
  ['12-4', '连衣裙', '592'],
  ['12-4', '连衣裙', '593'],
  ['12-4', '连衣裙', '594'],
  ['12-4', '连衣裙', '595'],
  ['12-7', '连衣裙', '401'],
  ['12-7', '连衣裙', '402'],
  ['12-7', '连衣裙', '403'],
  ['12-7', '连衣裙', '404'],
  ['12-9', '连衣裙', '704'],
  ['12-支1', '连衣裙', '725'],
  ['12-支1', '连衣裙', '649'],
  ['12-支2', '连衣裙', '351'],
  ['12-支2', '连衣裙', '352'],
  ['12-支2', '连衣裙', '353'],
  ['12-支2', '连衣裙', '354'],
  ['12-支3', '连衣裙', '401'],
  ['12-支3', '连衣裙', '402'],
  ['12-支3', '连衣裙', '403'],
  ['12-支3', '连衣裙', '404'],
  ['13-4', '外套', '215'],
  ['13-6', '连衣裙', '430'],
  ['13-7', '下装', '402'],
  ['13-7', '上衣', '437'],
  ['13-8', '连衣裙', '415'],
  ['13-8', '连衣裙', '572'],
  ['13-8', '连衣裙', '573'],
  ['13-8', '连衣裙', '574'],
  ['13-8', '连衣裙', '575'],
  ['13-8', '连衣裙', '603'],
  ['13-8', '连衣裙', '639'],
  ['13-8', '连衣裙', '645'],
  ['13-支1', '连衣裙', '94'],
  ['13-支1', '连衣裙', '149'],
  ['13-支1', '连衣裙', '158'],
  ['13-支1', '下装', '338'],
  ['13-支1', '连衣裙', '372'],
  ['13-支1', '连衣裙', '401'],
  ['13-支1', '连衣裙', '402'],
  ['13-支1', '连衣裙', '403'],
  ['13-支1', '连衣裙', '404'],
  ['13-支1', '连衣裙', '605'],
  ['13-支1', '连衣裙', '644'],
  ['13-支1', '连衣裙', '006'],
  ['13-支1', '连衣裙', '006'],
  ['13-支1', '连衣裙', '009'],
  ['13-支1', '连衣裙', '011'],
  ['13-支3', '上衣', '243'],
  ['13-支3', '连衣裙', '489'],
  ['13-支3', '连衣裙', '490'],
  ['13-支3', '连衣裙', '491'],
  ['13-支3', '连衣裙', '492'],
  ['g3-1', '连衣裙', '405'],
  ['g3-1', '上衣', '379'],
  ['g3-1', '下装', '350'],
  ['g3-1', '上衣', '383'],
  ['g3-1', '下装', '383'],
  ['g3-1', '下装', '395'],
  ['g3-3', '袜子-袜套', '310'],
  ['g3-5', '外套', '230'],
  ['g3-5', '外套', '231'],
  ['g3-5', '外套', '232'],
  ['g3-5', '连衣裙', '628'],
  ['g3-5', '连衣裙', '382'],
  ['g3-5', '连衣裙', '387'],
  ['g3-5', '连衣裙', '383'],
  ['g3-5', '连衣裙', '430'],
  ['g3-5', '连衣裙', '629'],
  ['g3-5', '连衣裙', '630'],
  ['g3-5', '连衣裙', '061'],
  ['g3-5', '连衣裙', '061'],
  ['g3-5', '连衣裙', '392'],
  ['g3-5', '连衣裙', '355'],
  ['g3-5', '连衣裙', '075'],
  ['g3-5', '连衣裙', '308'],
  ['g3-5', '连衣裙', '321'],
  ['g3-5', '连衣裙', '598'],
  ['g3-5', '连衣裙', '125'],
  ['g3-6', '外套', '226'],
  ['g3-6', '外套', '227'],
  ['g3-6', '外套', '213'],
  ['g3-6', '外套', '214'],
  ['g3-6', '外套', '215'],
  ['g3-6', '上衣', '356'],
  ['g3-6', '下装', '008'],
  ['g4-2', '外套', '140'],
  ['g4-2', '外套', '200'],
  ['g4-2', '外套', '201'],
  ['g4-2', '外套', '202'],
  ['g4-2', '连衣裙', '624'],
  ['g4-2', '连衣裙', '619'],
  ['g4-2', '上衣', '421'],
  ['g4-2', '连衣裙', '393'],
  ['g4-2', '连衣裙', '394'],
  ['g4-2', '上衣', '409'],
  ['g4-2', '下装', '376'],
  ['g4-2', '上衣', '350'],
  ['g4-2', '下装', '330'],
  ['g4-2', '上衣', '349'],
  ['g4-2', '下装', '329'],
  ['g4-3', '连衣裙', '401'],
  ['g4-3', '连衣裙', '402'],
  ['g4-3', '连衣裙', '404'],
  ['g4-3', '外套', '218'],
  ['g4-4', '连衣裙', '155'],
  ['g4-4', '连衣裙', '156'],
  ['g4-4', '连衣裙', '435'],
  ['g4-4', '连衣裙', '436'],
  ['g4-4', '连衣裙', '143'],
  ['g4-4', '连衣裙', '509'],
  ['g4-4', '连衣裙', '507'],
  ['g4-4', '连衣裙', '508'],
  ['g4-4', '上衣', '354'],
  ['g4-4', '上衣', '253'],
  ['g4-4', '上衣', '373'],
  ['g5-2', '连衣裙', '520'],
  ['g5-2', '连衣裙', '698'],
  ['g5-2', '连衣裙', '578'],
  ['g5-2', '连衣裙', '579'],
  ['g5-3', '外套', '226'],
  ['g5-3', '连衣裙', '259'],
  ['g5-3', '连衣裙', '503'],
  ['g5-4', '下装', '247'],
  ['g5-4', '下装', '093'],
  ['g5-4', '下装', '409'],
  ['g5-4', '下装', '410'],
  ['g5-5', '连衣裙', '591'],
  ['g5-5', '连衣裙', '592'],
  ['g5-5', '连衣裙', '593'],
  ['g5-5', '连衣裙', '594'],
  ['g5-5', '连衣裙', '595'],
  ['g5-5', '连衣裙', '435'],
  ['g5-5', '连衣裙', '436'],
  ['g5-5', '连衣裙', '400'],
  ['g5-6', '下装', '028'],
  ['g5-6', '下装', '026'],
  ['g5-6', '下装', '027'],
  ['g5-6', '上装', '004'],
  ['g5-7', '上衣', '408'],
  ['g5-7', '下装', '375'],

];
