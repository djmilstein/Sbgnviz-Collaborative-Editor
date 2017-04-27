/** The idxcardjson-to-ml-converter module translates an indexcard JSON from the Reach API into a JSON valid for viz. Its implementation is below.
 **/

// Author: David Servillo.

//Date of the last change: 07/08/2016

var idxCardToJson = {

    //Create the viz-compatible JSON
    createJson: function(idxcardjsonObj) {
        var jsonObj = {};
        jsonObj.nodes = [];
        jsonObj.edges = [];

        var i;
        for(i=0; i<idxcardjsonObj.cards.length; i++) {

            //Create the first glyph
            jsonObj.nodes.push({});
            jsonObj.nodes[4*i].data = {};
            jsonObj.nodes[4*i].data.id = "ele"+i+1;
            jsonObj.nodes[4*i].data.class = "macromolecule";
            jsonObj.nodes[4*i].data.bbox = {};
            jsonObj.nodes[4*i].data.bbox.x = 585.7398209991329;
            jsonObj.nodes[4*i].data.bbox.y = 585.7398209991329;
            jsonObj.nodes[4*i].data.bbox.w = "60.0";
            jsonObj.nodes[4*i].data.bbox.h = "60.0";
            jsonObj.nodes[4*i].data.statesandinfos = [{}];
            jsonObj.nodes[4*i].data.statesandinfos[0].bbox = {};
            jsonObj.nodes[4*i].data.statesandinfos[0].bbox.x = -27.916666666666668;
            jsonObj.nodes[4*i].data.statesandinfos[0].bbox.y = -27.916666666666668;
            jsonObj.nodes[4*i].data.statesandinfos[0].bbox.w = "53.0";
            jsonObj.nodes[4*i].data.statesandinfos[0].bbox.h = "18.0";
            jsonObj.nodes[4*i].data.statesandinfos[0].id = "ele"+i+2;
            jsonObj.nodes[4*i].data.statesandinfos[0].clazz = "unit of information";
            jsonObj.nodes[4*i].data.statesandinfos[0].label = {};
            jsonObj.nodes[4*i].data.statesandinfos[0].label.text = "mt:prot";
            jsonObj.nodes[4*i].data.parent = "";
            jsonObj.nodes[4*i].data.ports = [];

            if('participant_a' in idxcardjsonObj.cards[i].extracted_information)
                jsonObj.nodes[4*i].data.label = idxcardjsonObj.cards[i].extracted_information.participant_a.entity_text;
            else
                jsonObj.nodes[4*i].data.label = "";

            //Create the second glyph
            jsonObj.nodes.push({});
            jsonObj.nodes[4*i+1].data = {};
            jsonObj.nodes[4*i+1].data.id = "ele"+i+3;
            jsonObj.nodes[4*i+1].data.class = "macromolecule";
            jsonObj.nodes[4*i+1].data.bbox = {};
            jsonObj.nodes[4*i+1].data.bbox.x = 585.7398209991329;
            jsonObj.nodes[4*i+1].data.bbox.y = 585.7398209991329;
            jsonObj.nodes[4*i+1].data.bbox.w = "60.0";
            jsonObj.nodes[4*i+1].data.bbox.h = "60.0";
            jsonObj.nodes[4*i+1].data.label = idxcardjsonObj.cards[i].extracted_information.participant_b.entity_text;
            jsonObj.nodes[4*i+1].data.statesandinfos = [{}];
            jsonObj.nodes[4*i+1].data.statesandinfos[0].bbox = {};
            jsonObj.nodes[4*i+1].data.statesandinfos[0].bbox.x = -27.916666666666668;
            jsonObj.nodes[4*i+1].data.statesandinfos[0].bbox.y = -27.916666666666668;
            jsonObj.nodes[4*i+1].data.statesandinfos[0].bbox.w = "53.0";
            jsonObj.nodes[4*i+1].data.statesandinfos[0].bbox.h = "18.0";
            jsonObj.nodes[4*i+1].data.statesandinfos[0].id = "ele"+i+4;
            jsonObj.nodes[4*i+1].data.statesandinfos[0].clazz = "unit of information";
            jsonObj.nodes[4*i+1].data.statesandinfos[0].label = {};
            jsonObj.nodes[4*i+1].data.statesandinfos[0].label.text = "mt:prot";
            jsonObj.nodes[4*i+1].data.parent = "";
            jsonObj.nodes[4*i+1].data.ports = [];

            //Create the third glyph
            jsonObj.nodes.push({});
            jsonObj.nodes[4*i+2].data = {};
            jsonObj.nodes[4*i+2].data.id = "ele"+i+5;
            jsonObj.nodes[4*i+2].data.class = "process";
            jsonObj.nodes[4*i+2].data.label = "null";
            jsonObj.nodes[4*i+2].data.bbox = {};
            jsonObj.nodes[4*i+2].data.bbox.x = 585.7398209991329;
            jsonObj.nodes[4*i+2].data.bbox.y = 585.7398209991329;
            jsonObj.nodes[4*i+2].data.bbox.w = "20.0";
            jsonObj.nodes[4*i+2].data.bbox.h = "20.0";
            jsonObj.nodes[4*i+2].data.parent = "";
            jsonObj.nodes[4*i+2].data.ports = [];

            //Create the fourth glyph
            jsonObj.nodes.push({});
            jsonObj.nodes[4*i+3].data = {};
            jsonObj.nodes[4*i+3].data.id = "ele"+i+6;
            jsonObj.nodes[4*i+3].data.class = "source and sink";
            jsonObj.nodes[4*i+3].data.bbox = {};
            jsonObj.nodes[4*i+3].data.bbox.x = 585.7398209991329;
            jsonObj.nodes[4*i+3].data.bbox.y = 585.7398209991329;
            jsonObj.nodes[4*i+3].data.bbox.w = "20.0";
            jsonObj.nodes[4*i+3].data.bbox.h = "20.0";
            jsonObj.nodes[4*i+3].data.parent = "";
            jsonObj.nodes[4*i+3].data.ports = [];

            //Create the first arc
            jsonObj.edges.push({});
            jsonObj.edges[3*i].data = {};
            jsonObj.edges[3*i].data.id = jsonObj.nodes[4*i+3].data.id + "-" + jsonObj.nodes[4*i+2].data.id;
            jsonObj.edges[3*i].data.class = "consumption";
            jsonObj.edges[3*i].data.bendPointPositions = [];
            jsonObj.edges[3*i].data.cardinality = 0;
            jsonObj.edges[3*i].data.source = jsonObj.nodes[4*i+3].data.id;
            jsonObj.edges[3*i].data.target = jsonObj.nodes[4*i+2].data.id;
            jsonObj.edges[3*i].data.portsource = jsonObj.nodes[4*i+3].data.id;
            jsonObj.edges[3*i].data.porttarget = jsonObj.nodes[4*i+2].data.id;

            //Create the second arc
            jsonObj.edges.push({});
            jsonObj.edges[3*i+1].data = {};
            jsonObj.edges[3*i+1].data.id = jsonObj.nodes[4*i+2].data.id + "-" + jsonObj.nodes[4*i+1].data.id;
            jsonObj.edges[3*i+1].data.class = "production";
            jsonObj.edges[3*i+1].data.bendPointPositions = [];
            jsonObj.edges[3*i+1].data.cardinality = 0;
            jsonObj.edges[3*i+1].data.source = jsonObj.nodes[4*i+2].data.id;
            jsonObj.edges[3*i+1].data.target = jsonObj.nodes[4*i+1].data.id;
            jsonObj.edges[3*i+1].data.portsource = jsonObj.nodes[4*i+2].data.id;
            jsonObj.edges[3*i+1].data.porttarget = jsonObj.nodes[4*i+1].data.id;

            //Create the third arc
            jsonObj.edges.push({});
            jsonObj.edges[3*i+2].data = {};
            jsonObj.edges[3*i+2].data.id = jsonObj.nodes[4*i].data.id + "-" + jsonObj.nodes[4*i+2].data.id;
            jsonObj.edges[3*i+2].data.bendPointPositions = [];
            jsonObj.edges[3*i+2].data.cardinality = 0;
            jsonObj.edges[3*i+2].data.source = jsonObj.nodes[4*i].data.id;
            jsonObj.edges[3*i+2].data.target = jsonObj.nodes[4*i+2].data.id;
            jsonObj.edges[3*i+2].data.portsource = jsonObj.nodes[4*i].data.id;
            jsonObj.edges[3*i+2].data.porttarget = jsonObj.nodes[4*i+2].data.id;

            if(idxcardjsonObj.cards[i].extracted_information.interaction_type == "increases_activity")  //The interaction is a type of stimulation.
                jsonObj.edges[3*i+2].data.class = "stimulation";

            if(idxcardjsonObj.cards[i].extracted_information.interaction_type == "decreases_activity")  //The interaction is a type of inhibition.
                jsonObj.edges[3*i+2].data.class = "inhibition";

            if(idxcardjsonObj.cards[i].extracted_information.interaction_type == "adds_modification") { //The interaction is a chemical modification
                jsonObj.edges[3*i+2].data.class = "stimulation";

                //That glyph is not a "source and sink" glyph anymore, but a macromolecule
                jsonObj.nodes[4*i+3].data.class = "macromolecule";
                jsonObj.nodes[4*i+3].data.label = idxcardjsonObj.cards[i].extracted_information.participant_b.entity_text;
                jsonObj.nodes[4*i+3].data.statesandinfos = [{}];
                jsonObj.nodes[4*i+3].data.bbox.w = "60.0";
                jsonObj.nodes[4*i+3].data.bbox.h = "60.0";
                jsonObj.nodes[4*i+3].data.statesandinfos[0].id = "ele"+i+8;
                jsonObj.nodes[4*i+3].data.statesandinfos[0].clazz = "unit of information";
                jsonObj.nodes[4*i+3].data.statesandinfos[0].label = {};
                jsonObj.nodes[4*i+3].data.statesandinfos[0].label.text = "mt:prot";
                jsonObj.nodes[4*i+3].data.statesandinfos[0].bbox = {};
                jsonObj.nodes[4*i+3].data.statesandinfos[0].bbox.x = -27.916666666666668;
                jsonObj.nodes[4*i+3].data.statesandinfos[0].bbox.y = -27.916666666666668;
                jsonObj.nodes[4*i+3].data.statesandinfos[0].bbox.w = "53.0";
                jsonObj.nodes[4*i+3].data.statesandinfos[0].bbox.h = "18.0";
                jsonObj.nodes[4*i+3].data.parent = "";
                jsonObj.nodes[4*i+3].data.ports = [];

                var j;
                for(j=0; j<idxcardjsonObj.cards[i].extracted_information.modifications.length; j++) {

                    //Add a state variable resulting from the interaction
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "acetylation") {  //The interaction is an acetylation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "Ac";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "glycosylation") {  //The interaction is a glycosylation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "G";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "hydroxylation") {  //The interaction is a hydroxylation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "OH";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "methylation") {  //The interaction is a methylation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "Me";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "myristoylation") {  //The interaction is a myristoylation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "My";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "palmytoylation") {  //The interaction is a palmytoylation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "Pa";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "phosphorylation") {  //The interaction is a phosphorylation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "P";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "prenylation") {  //The interaction is a prenylation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "Pr";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "protonation") {  //The interaction is a protonation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "H";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "sulfation") {  //The interaction is a sulfation
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "S";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                    if(idxcardjsonObj.cards[i].extracted_information.modifications[j].modification_type == "ubiquitination") {  //The interaction is a ubiquitination
                        jsonObj.nodes[4*i+1].data.statesandinfos.push({});
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].id = "ele"+i+7;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].clazz = "state variable";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].state.value = "Ub";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox = {};
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.x = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.y = -27.0;
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.w = "53.0";
                        jsonObj.nodes[4*i+1].data.statesandinfos[j+1].bbox.h = "18.0";
                    }
                }
            }
        }
        return jsonObj;
    }
};



if( typeof module !== 'undefined' && module.exports) // expose as a nodejs module
    module.exports = idxCardToJson;