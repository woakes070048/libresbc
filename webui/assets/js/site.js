const DUMMY = 'DUMMY';
const EMPTYSTR = '';
const APIGuide = {
    "Cluster": {
        "path": "/libreapi/cluster"
    },
    // BASE
    "NetAlias": {
        "path": "/libreapi/base/netalias",
        "presentation-html": "netalias-table",
        "sample": {
            "name": "name",
            "desc": "description",
            "addresses": [
                {
                    "member": "nodeid",
                    "listen": "ip_address",
                    "advertise": "ip_address"
                }
            ]
        }
    },
    "AccessControl": {
        "path": "/libreapi/base/acl",
        "presentation-html": "acl-table",
        "sample": {
            "name": "name",
            "desc": "description",
            "action": "deny",
            "rules": [
                {
                    "action": "allow",
                    "key": "cidr",
                    "value": "ip_network_address"
                }
            ]
        }
    },
    // CLASS
    "MediaClass": {
        "path": "/libreapi/class/media",
        "presentation-html": "media-class-table",
        "sample": {
            "name": "name",
            "desc": "description",
            "codecs": [
                "PCMA",
                "PCMU",
                "OPUS",
                "G729",
                "AMR-WB"
            ]
        }
    },
    "CapacityClass": {
        "path": "/libreapi/class/capacity",
        "presentation-html": "capacity-class-table",
        "sample": {
            "name":"name",
            "desc": "description",
            "cps": -1,
            "concurentcalls": -1
        }
    },
    "TranslationClass": {
        "path": "/libreapi/class/translation",
        "presentation-html": "translation-class-table",
        "sample": {
            "name":"name",
            "desc": "description",
            "caller_number_pattern": "^([0-9]+)$",
            "caller_number_replacement": "+%{1}",
            "destination_number_pattern": "",
            "destination_number_replacement": "",
            "caller_name": "_auto"
        }
    },
    "ManipulationClass": {
        "path": "/libreapi/class/manipulation",
        "presentation-html": "manipulation-class-table",
        "sample": {
            "name":"name",
            "desc": "description",
            "actions": [
                    {
                    "action": "action",
                    "targetvar": "variable",
                    "values": [
                        "value"
                    ]
                }
            ]
        }
    },
    "PreAnswerClass": {
        "path": "/libreapi/class/preanswer",
        "presentation-html": "preanswer-class-table",
        "sample": {
            "name": "name",
            "desc": "description",
            "streams": [
                {
                    "type": "signal/tone/media/speak",
                    "stream": "ring_ready/tone/mediafile"
                }
            ]
        }
    },
    // INTERCONCTION
    "SIPProfile": {
        "path": "/libreapi/sipprofile",
        "presentation-html": "sipprofile-table",
        "sample": {
            "name": "name",
            "desc": "description",
            "user_agent": "LibreSBC",
            "sdp_user": "LibreSBC",
            "local_network_acl": "rfc1918.auto",
            "enable_100rel": true,
            "ignore_183nosdp": true,
            "sip_options_respond_503_on_busy": false,
            "disable_transfer": true,
            "manual_redirect": true,
            "enable_3pcc": false,
            "enable_compact_headers": false,
            "dtmf_type": "rfc2833",
            "media_timeout": 0,
            "rtp_rewrite_timestamps": true,
            "context": "carrier",
            "sip_port": 5060,
            "addrdetect": "none",
            "sip_address": "netalias",
            "rtp_address": "netalias",
            "tls": false,
            "tls_only": false,
            "sips_port": 5061,
            "tls_version": "tlsv1.2"
        }
    },
    "Inbound": {
        "path": "/libreapi/interconnection/inbound",
        "presentation-html": "inbound-intcon-table",
        "sample": {
            "name": "name",
            "desc": "description",
            "sipprofile": "sipprofile",
            "routing": "routing-table",
            "sipaddrs": [
                "farend-sip-signaling-ip"
            ],
            "rtpaddrs": [
                "farend-rtp-media-ip"
            ],
            "ringready": false,
            "media_class": "media-class",
            "capacity_class": "capacity-class",
            "translation_classes": [],
            "manipulation_classes": [],
            "authscheme": "IP",
            "nodes": [
                "_ALL_"
            ],
            "enable": true
        }
    },
    "Outbound": {
        "path": "/libreapi/interconnection/outbound",
        "presentation-html": "outbound-intcon-table",
        "sample": {
            "name": "name",
            "desc": "description",
            "media_class": "media-class",
            "capacity_class": "capacity-class",
            "translation_classes": [],
            "manipulation_classes": [],
            "sipprofile": "gsipv6",
            "privacy": [
                "none"
            ],
            "cid_type": "none",
            "distribution": "weight_based",
            "gateways": [
              {
                "name": "HONEYPOT6GW",
                "weight": 1
              }
            ],
            "rtpaddrs": [
                "farend-rtp-media-ip"
            ],
            "nodes": [
                "_ALL_"
            ],
            "enable": true,
        }
    },
    "Gateway": {
        "path": "/libreapi/base/gateway",
        "presentation-html": "gateway-table",
        "sample":{
            "name": "name",
            "desc": "description",
            "username": "none",
            "password": "none",
            "proxy": "farend-sip-signaling-ip",
            "port": 5060,
            "transport": "udp",
            "do_register": false,
            "caller_id_in_from": true,
            "cid_type": "none",
            "ping": "interval-in-second-for-sip-options"
        }
    },
    // ACCESS LAYER
    "AccessService": {
        "path": "/libreapi/access/service",
        "presentation-html": "access-service-table",
        "sample": {
            "name": "name",
            "desc": "description",
            "trying_reason": "LibreSBC Trying",
            "natping_from": "sip:keepalive@libresbc",
            "topology_hiding": "hide.topo",
            "whiteips":[],
            "blackips":[],
            "antiflooding": {
                "sampling": 2,
                "density": 20,
                "window": 600,
                "threshold": 3,
                "bantime": 600
            },
            "authfailure": {
                "window": 600,
                "threshold": 18,
                "bantime": 900
            },
            "attackavoid": {
                "window": 18000,
                "threshold": 3,
                "bantime": 7200
            },
            "transports": [
                "udp",
                "tcp"
            ],
            "sip_address": "netalias",
            "domains": [
                "libre.sbc"
            ]
        }
    },
    "AccessDomainPolicy": {
        "path": "/libreapi/access/domain-policy",
        "presentation-html": "access-domain-policy-table",
        "sample": {
            "domain": "libre.sbc",
            "srcsocket": {
                "ip": "127.0.0.3"
            },
            "dstsocket": {
                "ip": "127.0.0.2"
            }
        }
    },
    "AccessUserDirectory": {
        "path": "/libreapi/access/directory/user/domain",
        "presentation-html": "access-user-directory-table",
        "sample": {
            "domain": "libre.sbc",
            "id": "joebiden",
            "secret": "p@ssword"
        }
    },
    // ROUTING
    "RoutingTable": {
        "path": "/libreapi/routing/table",
        "presentation-html": "routing-presentation-object",
        "sample": 	{
            "name": "name",
            "desc": "description",
            "action": "route/block/query/httpr",
            "variables": ["cidnumber", "cidname", "dstnumber", "intconname", "realm"],
            "routes": {
                "primary": "primary-endpoint",
                "secondary": "secondary-endpoint",
                "load": "load-share-percentage"
            }
        }
    },
    "RoutingRecord": {
        "path": "/libreapi/routing/record",
        "presentation-html": null,
        "sample": 	{
            "table": "routing-table-name",
            "match": "em/lpm/eq/ne/gt/lt",
            "value": "reference_value",
            "action": "route/block/jumps",
            "routes": {
                "primary": "primary-endpoint",
                "secondary": "secondary-endpoint",
                "load": "load-share-percentage"
            }
        }
    },
};

var ConfigDetailTextH = document.getElementById("config-detail");
var ConfigSubmitBntH = document.getElementById("config-submit");
var PanelLabelH = document.getElementById("offcanvaspanel-label");
// Tooltip
var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
var tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
/*---------------------------------------------------------------------------*/

function GetPresentNode(){
    $.ajax({
        type: "GET",
        url: '/libreapi/predefine',
        success: function (data) {
            ShowProgress();
            let CandidateHtml = EMPTYSTR;
            data.candidates.forEach((element) => {
                CandidateHtml = CandidateHtml + `<span class="badge bg-secondary rounded-pill" id="cdr-bucket">`+element+`</span>`;
            });
            document.getElementById('node-info').innerHTML = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Software Version <span class="badge bg-success rounded-pill">` + data.swversion + `</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                NodeID <span class="badge bg-danger rounded-pill">`+data.nodeid+`</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Node Candidates
                <div>` + CandidateHtml + `</div> </li>`;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            document.getElementById('node-info').innerHTML = EMPTYSTR;
            ShowToast(jqXHR.responseJSON.error);
        }
    });

    $.ajax({
        type: "GET",
        url: '/libreapi/cluster',
        success: function (data) {
            ShowProgress();
            let MembersHtml = EMPTYSTR;
            data.members.forEach((element) => {
                MembersHtml = MembersHtml + `<span class="badge bg-dark rounded-pill" id="cdr-bucket">`+element+`</span>`;
            });
            document.getElementById('cluster-info').innerHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
            Cluster Name <span class="badge bg-warning text-dark rounded-pill">`+data.name+`</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Members
                <div>` + MembersHtml +`</div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Soft Capacity
                <div>
                <span class="badge bg-primary rounded-pill">cps: `+data.max_calls_per_second+`</span>
                <span class="badge bg-primary rounded-pill">concurrent call: `+data.max_concurrent_calls+`</span>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                RTP Ranges
                <div>
                <span class="badge bg-light text-dark rounded-pill" id="cdr-bucket">`+data.rtp_start_port+`-`+data.rtp_end_port+`</span>
            </div>`;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            document.getElementById('cluster-info').innerHTML = EMPTYSTR;
            ShowToast(jqXHR.responseJSON.error);
        }
    });
}

function GeneralGetPresent(SettingName){
    let path = APIGuide[SettingName]['path']
    let presentation = APIGuide[SettingName]["presentation-html"]
    $.ajax({
        type: "GET",
        url: path,
        success: function (data) {
            ShowProgress();
            if (SettingName === 'RoutingTable'){
                RoutingTablePresentData(data, SettingName, presentation);
            } else{
                GeneralPresentData(data, SettingName, presentation);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            document.getElementById(presentation).innerHTML = EMPTYSTR;
            ShowToast(jqXHR.responseJSON.error);
        }
    });
}

function GeneralPresentData(DataList, SettingName, presentation){
    let tablebody = EMPTYSTR;
    let cnt = 1;
    DataList.forEach((element) => {
        let name = element.name
        htmltb = `<tr>
                    <td>`+cnt+`</td>
                    <td>`+name+`</td>
                    <td>`+element.desc+`</td>
                    <td>
                      <button class="btn btn-danger btn-sm" type="button"><i class="fa fa-times-circle" onclick="GeneralRemove('`+name+`','`+SettingName+`')"></i></button>
                      <button class="btn btn-success btn-sm" type="button">
                        <i class="fa fa-pencil" onclick="GeneralModify('`+name+`','`+SettingName+`')"></i>
                      </button>
                    </td>
                  </tr>`
        tablebody = tablebody + htmltb
        cnt++;
    });
    document.getElementById(presentation).innerHTML = `
        <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>` + tablebody + `</tbody>
        </table>`;
}


function GeneralRemove(name, SettingName){
    let path = APIGuide[SettingName]['path']
    $.ajax({
        type: "DELETE",
        url: path + "/" + name,
        success: function (data) {
            ShowToast("Delete Successfully " + SettingName + " " + name, "info");
            ShowProgress();
            GeneralGetPresent(SettingName);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            ShowToast(jqXHR.responseJSON.error);
        }
    });
}


function GeneralModify(name, SettingName){
    ShowProgress();
    let path = APIGuide[SettingName]['path']
    let url = APIGuide[SettingName]['path'] + "/" + name
    if (name===EMPTYSTR) {
        url = path
    }
    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            ShowToast("Detailize Successfully " + SettingName + " " + name, "info");
            ConfigDetailTextH.value = JSON.stringify(data, undefined, 4);
            PanelLabelH.innerHTML = SettingName + "  <strong><code>" + name + "</code></strong>";
            ConfigSubmitBntH.setAttribute('onclick',`GeneralSubmit('`+name+`','`+SettingName+`')`);

            var OffCanvasHtml = document.getElementById("offcanvaspanel");
            var offcanvaspanel = new bootstrap.Offcanvas(OffCanvasHtml);
            offcanvaspanel.show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            ShowToast(jqXHR.responseJSON.error);
        }
    });
}

function GeneralSubmit(name, SettingName){
    let path = APIGuide[SettingName]['path'];
    let jsonstring = ConfigDetailTextH.value;

    let method = 'PUT';
    let url = path + "/" + name
    // for modify special API such as [cluster]
    if (name === EMPTYSTR) {
        url = path;
    }
    // for create new object
    if (name === DUMMY) {
        method = 'POST';
        url = path;
    }

    $.ajax({
        type: method,
        url: url,
        dataType: "json",
        contentType: 'application/json',
        data: jsonstring,
        success: function (data) {
            ShowToast("Data has been submited", "info");
            if (SettingName === 'Cluster'){
                GetPresentNode();
            } else {
                GeneralGetPresent(SettingName);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            ShowToast(jqXHR.responseJSON.error);
        }
    });
}


function GeneralCreate(SettingName){
    let sample = APIGuide[SettingName]['sample'];

    ConfigSubmitBntH.setAttribute('onclick',`GeneralSubmit('`+DUMMY+`','`+SettingName+`')`);
    ConfigDetailTextH.value = JSON.stringify(sample, undefined, 4);
    PanelLabelH.innerHTML = SettingName + "  <strong><code>" + EMPTYSTR + "</code></strong>";
    ConfigSubmitBntH.setAttribute('onclick',`GeneralSubmit('`+DUMMY+`','`+SettingName+`')`);

    var OffCanvasHtml = document.getElementById("offcanvaspanel");
    var offcanvaspanel = new bootstrap.Offcanvas(OffCanvasHtml);
    offcanvaspanel.show();
}

// Routing
function RoutingTablePresentData(Rtables, SettingName, presentation){
    let RoutingTablesHtml = EMPTYSTR;
    Rtables.forEach((Rtable) => {
        let rtbName = Rtable.name;
        let rtbAction = Rtable.action;
        let rtbDesc = Rtable.desc;
        let detail = JSON.stringify(Rtable).replaceAll('"', '');
        console.log(detail);
        rtblhtml = `
      <div class="accordion-item">
        <h2 class="accordion-header" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="`+detail+`">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseRT`+rtbName+`">
            <span class="text-primary fw-bolder">`+rtbName+`</span> &nbsp;&nbsp;
            <span class="badge rounded-pill text-bg-danger">`+rtbAction+`</span> &nbsp;&nbsp;
            `+rtbDesc+`
          </button>
        </h2>
        <div id="collapseRT`+rtbName+`" class="accordion-collapse collapse">
          <div class="accordion-body">
            <div class="col-md-6 col-lg-6">
            </div>
          </div>
        </div>
      </div>`
      RoutingTablesHtml = RoutingTablesHtml + rtblhtml;
    });
    document.getElementById(presentation).innerHTML = RoutingTablesHtml;
    // update tooltip
    tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

/* ---------------------------------------------------------------------------
    PROGRESS STATE
--------------------------------------------------------------------------- */
var ProgressDotELMS = document.getElementById('progessdot');
var ToastMsgEMLS = document.getElementById('toastmsg');

function ShowProgress(){
    ProgressDotELMS.classList.remove('invisible');
    setTimeout(function() {
        ProgressDotELMS.classList.add('invisible')
    },
    777);
}

function ShowToast(message, msgtype='danger'){
    if (msgtype === 'danger'){
        ToastMsgEMLS.classList.add('bg-danger');
        ToastMsgEMLS.classList.remove('bg-primary');
        ToastMsgEMLS.classList.remove('bg-warning');
        ToastMsgEMLS.classList.remove('bg-success');
    }else if (msgtype === 'success'){
        ToastMsgEMLS.classList.add('bg-success');
        ToastMsgEMLS.classList.remove('bg-primary');
        ToastMsgEMLS.classList.remove('bg-danger');
        ToastMsgEMLS.classList.remove('bg-warning');
    }else if (msgtype === 'warning'){
        ToastMsgEMLS.classList.add('bg-warning');
        ToastMsgEMLS.classList.remove('bg-primary');
        ToastMsgEMLS.classList.remove('bg-danger');
        ToastMsgEMLS.classList.remove('bg-success');
    }else {
        ToastMsgEMLS.classList.add('bg-primary');
        ToastMsgEMLS.classList.remove('bg-danger');
        ToastMsgEMLS.classList.remove('bg-warning');
        ToastMsgEMLS.classList.remove('bg-success');
    }
    document.getElementById('event-message').innerHTML = message;
    $('.toast').toast('show');
}
