<template>
  <div>
    <div>
      <el-dialog title="临时新增" :visible.sync="formVisible" @close='closeDialog' >

        <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">

          <el-form-item label="主题" prop="ReimbursementTitle">

            <el-input v-model="expense"></el-input>

          </el-form-item>
          <p>{{this.test}}</p>

        </el-form>

      </el-dialog>
    </div>

    <input type="checkbox" id="sidemenu" />

    <div id="aside">
      <h2>6PlusCOIN MENU</h2>
      <div class="collapse-item">
        <input type="checkbox" id="collapse1" name="collapse" class="collapse-toggle"/>
        <label style="display: flex;" for="collapse1">
          <div>
            <h4>
              <i class =el-icon-arrow-down ></i>
              <i class =el-icon-arrow-right ></i>
              导出 EXPORT
            </h4>

          </div>
        </label>

        <div class="content" >

          <div id="download" style="padding: 15px">
            <a href="javascript:;" @click="exportPNG">
              <li><i class="el-icon-picture-outline"></i> 保存为图片</li>
            </a>
            <a href="javascript:;" @click="exportJSON">
              <li><i class="el-icon-document"></i> 保存为JSON</li>
            </a>
            <a href="javascript:;" @click="exportXML">
              <li><i class="el-icon-document-copy"></i> 保存为XML</li>
            </a>
            <a href="javascript:;" @click="exportSERVER">
              <li><i class="el-icon-document-copy"></i> 保存到服务器</li>
            </a>
          </div>
        </div>
      </div>

      <div class="collapse-item">
        <input type="checkbox" id="collapse2" name="collapse" class="collapse-toggle"/>
        <label style="display: flex;" for="collapse2">
          <h4>
            <i class =el-icon-arrow-down ></i>
            <i class =el-icon-arrow-right ></i>
            调整 ADJUST
          </h4>
        </label>
        <div class="content">
          <div id="adjust" style="padding:15px">
            <a href="javascript:;" @click="zoomIn">
              <li><i class="el-icon-zoom-in"></i> 放大</li>
            </a>
            <a href="javascript:;" @click="zoomOut">
              <li><i class="el-icon-zoom-out"></i> 缩小</li>
            </a>
            <a href="javascript:;" @click="refresh">
              <li><i class="el-icon-refresh-right"></i> 还原大小</li>
            </a>
            <a href="javascript:;" @click="restartPicture">
              <li><i class="el-icon-magic-stick"></i> 还原图形</li>
            </a>
            <a href="javascript:;" @click="changeFull">
              <li><i class="el-icon-full-screen"></i> 全屏切换</li>
            </a>
          </div>
        </div>
      </div>

      <div class="collapse-item">
        <input type="checkbox" id="collapse3" name="collapse" class="collapse-toggle"/>
        <label style="display: flex;" for="collapse3">
          <h4>
            <i class =el-icon-arrow-down ></i>
            <i class =el-icon-arrow-right ></i>
            编辑节点 NODE EDIT
          </h4>
        </label>
        <div class="content">
          <div class="modify" style="padding-top: 15px;padding-bottom: 15px">
            <div style="margin-bottom: 10px">
              <span style="font-size: 1.2em">节点名称：</span>
              <textarea id="nameIn"></textarea>
            </div>
            <div style="margin-bottom: 4px;float: left">
              <span style="font-size: 1.2em">修改名称：</span>
              <textarea id="nameOut"></textarea>
            </div>

            <div>
              <a href="javascript:;" @click="addNode">
                <li style="margin-left:20%; margin-bottom:25px;">
                  <i class="el-icon-plus"></i> 添加
                </li>
              </a>
              <a href="javascript:;" @click="deleteNode">
                <li style="">
                  <i class="el-icon-minus"></i> 删除
                </li>
              </a>
              <a href="javascript:;" @click="changeNode">
                <li style="">
                  <i class="el-icon-minus"></i> 修改
                </li>
              </a>
            </div>


          </div>
        </div>
      </div>

      <div class="collapse-item">
        <input type="checkbox" id="collapse4" name="collapse" class="collapse-toggle"/>
        <label style="display: flex;" for="collapse4">
          <h4>
            <i class =el-icon-arrow-down ></i>
            <i class =el-icon-arrow-right ></i>
            编辑关系 LINK EDIT
          </h4>
        </label>
        <div class="content" >
          <div class="modify">
            <div style="margin-bottom: 10px;margin-top: 15px">
              <span style="font-size: 1.2em"> 关系名称 *：</span>
              <textarea id="relNameIn"></textarea>
            </div>

            <div style="margin-bottom: 4px;float: left">
              <span style="font-size: 1.2em"> 修改名称：</span>
              <textarea id="relNameOut"></textarea>
            </div>

            <div style="margin-bottom: 4px;float: left">
              <span style="font-size: 1.2em"> FROM：</span>
              <textarea id="from_id"></textarea>
            </div>

            <div style="margin-bottom: 4px;float: left">
              <span style="font-size: 1.2em"> TO：</span>
              <textarea id="to_id"></textarea>
            </div>

            <div >
              <a href="javascript:;" @click="addLink">
                <li style= "margin-left: 20%; margin-bottom:25px;">
                  <i class="el-icon-plus"></i> 添加
                </li>
              </a>
              <a href="javascript:;" @click="deleteLink">
                <li style="">
                  <i class="el-icon-minus"></i> 删除
                </li>
              </a>
              <a href="javascript:;" @click="changeLink">
                <li style="">
                  <i class="el-icon-minus"></i> 修改
                </li>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="collapse-item">
        <input type="checkbox" id="collapse5" name="collapse" class="collapse-toggle"/>
        <label style="display: flex;" for="collapse5">
          <h4>
            <i class =el-icon-arrow-down ></i>
            <i class =el-icon-arrow-right ></i>
            文本编辑 JSON EDIT
          </h4>
        </label>

        <div class="content" >
          <div class="svg-set-box0" style="margin: 10px">
            <a>
              <li>
                <textarea id="text"></textarea>
              </li>
            </a>
            <a href="javascript:;" @click="change">
              <li style="float: left;margin-left: 35px;margin-bottom:20px;font-size: 1.2em;color: white;">
                <i class="el-icon-edit-outline"></i> 文档修改
              </li>
            </a>
          </div>
        </div>
      </div>

    </div>

    <div id="wrap">
      <label id="sideMenuControl" for="sidemenu">≡</label>
      <!--for 属性规定 label 与哪个表单元素绑定，即将这个控制侧边栏进出的按钮与checkbox绑定-->
    </div>

    <div id="gid_tc" style="float:left;">
      <div id="gid" class="gid"></div>
      <div class="mengceng"></div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import * as d3 from "d3";
import $ from "jquery";

export default {
  props: ["pid"],
  data() {
    return {
      theme: 0,
      loading: false,
      width: 1000,
      height: 800,
      gcontainer: {},
      svg: {},
      zoom: null,
      relnameIn: "",
      arrowMarker: {},
      simulation: {},
      isFullscreen: false,
      qaGraphNode: {},
      qaButtonGroup: {},
      qaGraphNodeText: {},
      qaGraphLink: {},
      qaGraphLinkText: {},
      graph: {
        nodes: [],
        links: []
      },
      defaultR: 30,
      colorList: [
        "#ff8373",
        "#f9c62c",
        "#7f7fd5",
        "#7dd5ff",
        "#70d3bd",
        "#ea91b0"
      ],
      pagesizelist: [
        { size: 100, isactive: false },
        { size: 300, isactive: false },
        { size: 500, isactive: true },
        { size: 1000, isactive: false }
      ],
      toolbarData: [
        { name: "编辑", value: 1, code: "edit" },
        { name: "展开", value: 1, code: "more" },
        { name: "追加", value: 1, code: "append" },
        { name: "连线", value: 1, code: "link" },
        { name: "删除", value: 1, code: "delete" }
      ],
      selectUuid: 0,
      uuidEndNum: 0,
      nodeRecordList: [],

      txx: '',
      tyy: '',
      //
      // selectrelationid: '',//选择操作的关系id
      //
      // deleteLinkDialogVisible:true

      isAddingNode:false,
      shape:5,//1：图片圆圈模式，2-8，各种形状，3暂时还在调试

      formVisible:true,//临时新增

    };
  },
  components: {},
  mounted() {
    this.initGraphContainer();
    this.addMaker();
    this.initGraph();
  },
  created() {},
  watch: {},
  methods: {
    initGraphContainer() {
      this.gcontainer = d3.select("#gid");
      if (this.isFullscreen) {
        this.width = window.screen.width;
        this.height = window.screen.height;
      } else {
        this.width = $("#" + this.pid).width();
        this.height = $("#" + this.pid).height();
      }
      this.svg = this.gcontainer.append("svg");
      var sWidth = this.width;
      var sHeight = this.height;

      this.svg.attr("width", sWidth);
      this.svg.attr("height", sHeight);
      // this.svg.attr("viewBox", "0 0 " + sWidth / 2 + " " + sHeight / 2);
      this.svg.attr("id", "svg_idx");
      this.svg.attr("preserveAspectRatio", "xMidYMidmeet");
      this.simulation = d3
        .forceSimulation()
        .force("charge", d3.forceManyBody().strength(-1500))
        .force(
          "link",
          d3
            .forceLink()
            .distance(60)
            .id(function(d) {
              return d.uuid;
            })
        )
        .force("collide", d3.forceCollide().strength(0.1))
        .force("center", d3.forceCenter(this.width / 2, this.height / 2));
      this.qaGraphLink = this.svg.append("g").attr("class", "line");
      this.qaGraphLinkText = this.svg.append("g").attr("class", "linetext");
      this.qaGraphNode = this.svg.append("g").attr("class", "node");
      this.qaGraphNodeText = this.svg.append("g").attr("class", "nodetext");
      this.nodebuttonGroup = this.svg.append("g").attr("class", "nodebutton");
      this.svg.on(
        "click",
        function() {
          d3.selectAll(".buttongroup").classed("notshow", true);
        },
        false
      );
    },
    async initGraph() {
      let response = {};
      try {
        response = await axios.get("http://localhost:8081/api/getCoin", {});
        if(response.data.node.length === 0)
          response = await axios.get("/static/kgData.json", {});
      }
      catch (e) {
        response = await axios.get("/static/kgData.json", {});
      }

      let data = response.data;
      console.log(data);
      this.graph.nodes = data.node;
      this.graph.links = data.relationship;

      for (let node of this.graph.nodes) {
        if (node.uuid + 1 > this.uuidEndNum)
          this.uuidEndNum = node.uuid + 1;
      }
      for (let link of this.graph.links) {
        if (link.uuid + 1 > this.uuidEndNum)
          this.uuidEndNum = link.uuid + 1;
      }

      this.updateGraph();
    },
    addMaker() {
      var arrowMarker = this.svg
        .append("marker")
        .attr("id", "arrow")
        .attr("markerUnits", "strokeWidth")
        .attr("markerWidth", "20") //
        .attr("markerHeight", "20")
        .attr("viewBox", "0 0 12 12")
        .attr("refX", "28")
        .attr("refY", "6")
        .attr("orient", "auto");
      var arrowPath = "M2,2 L10,6 L2,10 L6,6 L2,2"; // 定义箭头形状
      arrowMarker
        .append("path")
        .attr("d", arrowPath)
        .attr("fill", "#56c38a");
    },
    openNode() {
      var _this = this;
      var noddd = [
        {
          flag: "1",
          code: "27301111",
          parentCode: "273",
          grade: "2",
          name: "儒家2",
          uuid: "4617858011"
        },
        {
          code: "273012222",
          flag: "1",
          parentCode: "273",
          grade: "3",
          name: "故事轶闻2",
          uuid: "2636501111"
        }
      ];
      var newships = [
        {
          sourceid: "273",
          targetid: "2636501111",
          name: "",
          targetcode: "2730107",
          uuid: "91804213",
          sourcecode: "27301"
        },
        {
          sourceid: "273",
          targetid: "4617858011",
          name: "",
          targetcode: "273010723",
          uuid: "91804389",
          sourcecode: "2730107"
        }
      ];
      _this.graph.nodes = _this.graph.nodes.concat(noddd);
      _this.graph.links = _this.graph.links.concat(newships);
      _this.updategraph();
    },
    drawNode(nodes) {
      var _this = this;
      var node = this.qaGraphNode.selectAll("circle").data(nodes, function(d) {
        return d.uuid;
      });
      node.exit().remove();
      var nodeEnter = node.enter()
          .append("circle")
          .style("stroke-width",0);

      var i=2;
      /*nodeEnter.on("click", function(d) {
        console.log("触发单击");
        _this.selectUuid = d.uuid;
        var out_buttongroup_id = ".out_buttongroup_" + d.uuid;
        var selectItem = d3.select(out_buttongroup_id)._groups[0][0];
        if (selectItem.classList.contains("notshow")) {
          _this.svg.selectAll(".buttongroup").classed("notshow", true);
          d3.select(out_buttongroup_id).classed("notshow", false);
        } else {
          d3.select(out_buttongroup_id).classed("notshow", true);
        }
        event.stopPropagation();
      });*/
      nodeEnter.on("dblclick", function() {
        if(i<5){
          i++;
        }else{
          i=0;
        }
        console.log(i)
        d3.select(this).attr("fill",_this.colorList[i]);
        console.log(this);
       // event.preventDefault();
      });
      nodeEnter.on("mouseenter", function() {
        console.log("鼠标移入");
        d3.select(this).style("stroke-width", "12"); //增大涟漪
      });
      nodeEnter.on("mouseleave", function() {
        console.log("鼠标移出");
        d3.select(this).style("stroke-width", 0);
        //todo其他节点和连线一并显示
        d3.select(".node").style("fill-opacity", 1);
        d3.select(".nodetext").style("fill-opacity", 1);
        d3.selectAll(".line").style("stroke-opacity", 1);
        d3.selectAll(".linetext").style("fill-opacity", 1);
      });
      nodeEnter.on("mouseover", function(d) {
        //todo鼠标放上去只显示相关节点，其他节点和连线隐藏
        d3.selectAll(".node").style("fill-opacity", 0.1);
        var relvantNodeIds = [];
        var relvantNodes = _this.graph.links.filter(function(n) {
          return n.sourceid == d.uuid || n.targetid == d.uuid;
        });
        relvantNodes.forEach(function(item) {
          relvantNodeIds.push(item.sourceid);
          relvantNodeIds.push(item.targetid);
        });
        //显示相关的节点
        _this.qaGraphNode
          .selectAll("circle")
          .style("fill-opacity", function(c) {
            if (relvantNodeIds.indexOf(c.uuid) > -1) {
              return 1.0;
            }
          });
        //透明所有节点文字
        d3.selectAll(".nodetext").style("fill-opacity", 0.1);
        //显示相关的节点文字
        _this.qaGraphNodeText
          .selectAll("text")
          .style("fill-opacity", function(c) {
            if (relvantNodeIds.indexOf(c.uuid) > -1) {
              return 1.0;
            }
          });
        //透明所有连线
        d3.selectAll(".line").style("stroke-opacity", 0.1);
        //显示相关的连线
        _this.qaGraphLink
          .selectAll("line")
          .style("stroke-opacity", function(c) {
            if (c.lk.targetid === d.uuid) {
              console.log(c);
              return 1.0;
            }
          });
        //透明所有连线文字
        d3.selectAll(".linetext").style("fill-opacity", 0.1);
        //显示相关的连线文字
        _this.qaGraphLinkText
          .selectAll(".linetext")
          .style("fill-opacity", function(c) {
            if (c.lk.targetid === d.uuid) {
              return 1.0;
            }
          });
      });
      nodeEnter.call(
        d3
          .drag()
          .on("start", _this.dragStarted)
          .on("drag", _this.dragged)
          .on("end", _this.dragEnded)
      );
      node = nodeEnter.merge(node).text(function(d) {
        return d.name;
      });
      node.style("stroke", function(d) {
        if (d.color) {
          return d.color;
        }
        return "#ffffff";
      });
      node.style("stroke-opacity", 0.4);
      node.attr("r", function(d) {
        if (d.r) {
          return d.r;
        }
        return d.index === 0 ? 28 : 20;
      });
      node.attr("fill", function(d, i) {
        //创建圆形图像
        var defs = d3.selectAll("svg >defs");
        if (_this.shape===2) {
          var img_w = 77,
            img_h = 80;

          var catpattern = defs
            .append("pattern")
            .attr("id", "catpattern" + i)
            .attr("height", 1)
            .attr("width", 1);
          catpattern
            .append("image")
            .attr("x", -(img_w / 2 - d.r))
            .attr("y", -(img_h / 2 - d.r))
            .attr("width", img_w)
            .attr("height", img_h)
            .attr("xlink:href", d.imgsrc);
            console.log(d.r);
          return "url(#catpattern" + i + ")";

        }else if (_this.shape===1){
          var rect_w = 30,
              rect_h =30;
          var rectpattern = defs
              .append("pattern")
              .attr('id',"recttest")
              .attr("height",1)
              .attr("width",1);

          rectpattern
              .append("rect")
              .attr("x", -(rect_w / 2 - d.r))
              .attr("y", -(rect_h / 2 - d.r))
              .attr("width", rect_w)
              .attr("height", rect_h)
              .attr("fill",_this.colorList[2]);
          return "url(#recttest)";
        }else if(_this.shape===3){
          console.log(d3.selectAll('svg >defs'))
          return "url(#person)"
        }
        else if (_this.shape===4){
          var ec_x = 50,
            ec_y =30;
          var ecpattern = defs
              .append("pattern")
              .attr('id',"ectest")
              .attr("height",1)
              .attr("width",1);

          ecpattern
              .append("rect")
              .attr("x", -(ec_x / 2 - d.r))
              .attr("y", -(ec_y / 2 - d.r))
              .attr("width", ec_x)
              .attr("height", ec_y)
              .attr("rx",10)
              .attr("fill",_this.colorList[2])
        return "url(#ectest)";
      }
        else if (_this.shape===5){

          var tri_down_pattern = defs
              .append("pattern")
              .attr('id',"tri_down_test")
              .attr("height",1)
              .attr("width",1);

          tri_down_pattern
              .append("polygon")
              .attr("points", "30,55 10,20 50,20")
              .attr("fill",_this.colorList[2])
          return "url(#tri_down_test)";
        }
        else if (_this.shape===6){

          var tri_up_pattern = defs
              .append("pattern")
              .attr('id',"tri_up_test")
              .attr("height",1)
              .attr("width",1);

          tri_up_pattern
              .append("polygon")
              .attr("points", "30,10 10,45 50,45")
              .attr("fill",_this.colorList[2])
          return "url(#tri_up_test)";
        }
        else if (_this.shape===7){

          var five_p_star_pattern = defs
              .append("pattern")
              .attr('id',"five_p_star_test")
              .attr("height",1)
              .attr("width",1);

          five_p_star_pattern
              .append("polygon")
              .attr("points", "30,10 19,46 48,24 12,24 42,46")
              .attr("fill",_this.colorList[2])
          return "url(#five_p_star_test)";
        }
        else if (_this.shape===8){

          var diamond_pattern = defs
              .append("pattern")
              .attr('id',"diamond_test")
              .attr("height",1)
              .attr("width",1);

          diamond_pattern
              .append("polygon")
              .attr("points", "30,10 50,30 30,50 10,30")
              .attr("fill",_this.colorList[2])
          return "url(#diamond_test)";
        }
        else {

          if (d.cur === "1") {
            return _this.colorList[0];
          } else {
            return _this.colorList[2];
          }
        }
      });
      node
        .append("title") // 为每个节点设置title
        .text(function(d) {
          if (d.name) {
            return d.name;
          }
          return "";
        });
      return node;
    },
    drawNodeText(nodes) {
      var _this = this;
      var nodetext = this.qaGraphNodeText
        .selectAll("text")
        .data(nodes, function(d) {
          return d.uuid;
        });
      nodetext.exit().remove();
      var nodetextEnter = nodetext.enter().append("text");
      nodetextEnter.call(
        d3
          .drag()
          .on("start", _this.dragStarted)
          .on("drag", _this.dragged)
          .on("end", _this.dragEnded)
      );
      nodetext = nodetextEnter.merge(nodetext).text(function(d) {
        return d.name;
      });
      nodetext
        .style("fill", function() {
          return "#222";
        })
        .attr("class", "nodetext")
        .attr("dy", "3.6em")
        .attr("font-family", "方正雅黑")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
        .text(function(d) {
          return d.name;
        });
      nodetext
        .append("title") // 为每个节点设置title
        .text(function(d) {
          if (d.name) {
            return d.name;
          }
          return "";
        });
      return nodetext;
    },
    drawLink(links) {
      var _this = this;
      var link = this.qaGraphLink.selectAll("line").data(links, function(d) {
        return d.uuid;
      });
      link.exit().remove();
      var linkEnter = link
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("stroke-width", 1)
        .attr("stroke", function() {
          return _this.colorList[2];
        })
        .attr("marker-end", "url(#arrow)"); // 箭头
      link = linkEnter.merge(link);
      return link;
    },
    drawLinkText(links) {
      var _this = this;
      var linktext = _this.qaGraphLinkText
        .selectAll("text")
        .data(links, function(d) {
          return d.uuid;
        });
      linktext.exit().remove();
      var linktextEnter = linktext
        .enter()
        .append("text")
        .attr("class", "linetext")
        .attr("fontfamily", "方正雅黑")
        .style("fill", "#888888")
        .style("font-size", "10px")
        .text(function(d) {
          return d.lk.name;
        });
      linktext = linktextEnter.merge(linktext).text(function(d) {
        return d.lk.name;
      });
      return linktext;
    },
    drawButtonGroup(nodes) {
      var _this = this;
      d3.selectAll(".nodebutton >g").remove();
      var nodebutton = _this.nodebuttonGroup
        .selectAll(".nodebutton")
        .data(nodes, function(d) {
          return d.uuid;
        });
      nodebutton.exit().remove();
      var nodebuttonEnter = nodebutton
        .enter()
        .append("use") //  为每个节点组添加一个 use 子元素
        .attr("r", function(d) {
          if (!d.r) {
            return _this.defaultR;
          }
          return d.r;
        })
        .attr("uuid", function(d) {
          return d.uuid;
        })
        .attr("xlink:href", function(d) {
          if (!d.r) {
            return "#out_circle_" + _this.defaultR;
          }
          return "#out_circle_" + d.r;
        }) //  指定 use 引用的内容
        .attr("class", function(d) {
          return "buttongroup out_buttongroup_" + d.uuid;
        })
        .classed("notshow", true);
      nodebutton = nodebuttonEnter.merge(nodebutton);
      return nodebutton;
    },
    drawToolButton() {
      var _this = this;
      //先删除所有为节点自定义的按钮组
      d3.selectAll("svg >defs").remove();
      var nodes = _this.graph.nodes;
      var pie = d3
        .pie()
        .value(function(d) {
          return d.value; //处理数据，指定value作为计算比例的字段
        })
        .startAngle(Math.PI * -0.7)
        .endAngle(Math.PI * 0.4);

      var piedata = pie(_this.toolbarData);
      var nodeButtonGroup = this.svg.append("defs");
      var nodeRArr = [];
      nodes.forEach(function(m) {
        if (!m.r) {
          m.r = _this.defaultR;
        }
        //按半径分别定义每种按钮组的图标
        if (nodeRArr.indexOf(m.r) == -1) {
          nodeRArr.push(m.r);
          var nbtng = nodeButtonGroup
            .append("g")
            .attr("id", "out_circle_" + m.r); //为每一个节点定制一个按钮组，在画按钮组的时候为其指定该id
          var buttonGroupEnter = nbtng
            .selectAll(".buttongroup")
            .data(piedata)
            .enter()
            .append("g")
            .attr("class", function(d) {
              return "action_" + d.data.code;
            });
          var arc = d3
            .arc()
            .innerRadius(m.r + 8)
            .outerRadius(m.r + 28)
            .padAngle(0.04)
            .padRadius(100)
            .cornerRadius(3);
          buttonGroupEnter
            .append("path")
            .attr("d", function(d) {
              return arc(d);
            })
            .attr("fill", "#86a8e7")
            .style("opacity", 0.6)
            .attr("stroke","#50658a")
            .attr("stroke-width", 2.5)
            .attr("stroke-opacity",0.3)

          buttonGroupEnter
            .append("text")
            .attr("transform", function(d) {
              return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .text(function(d) {
              return d.data.name;
            })
            .style("fill", function() {
              return "#ffffff";
            })
            .style("fill-opacity", 1)
            .attr("font-size", 10);
        }
      });
    },
    bindEventButtonGroup() {
      var _this = this;
      //按钮组事件绑定
      _this.toolbarData.forEach(function(m) {
        var btnClass = ".action_" + m.code;
        _this.svg.selectAll(btnClass).on("click", function(d) {
          console.log(
            d.data.name + ":" + d.data.code + ":uuid:" + _this.selectUuid
          );
        });
      });
    },
    formatData() {
      var _this = this;
      var lks = _this.graph.links;
      var nodes = _this.graph.nodes;
      nodes.forEach(function(n) {
        if (n.center === 1 || n.center === "1") {
          n.fx = _this.width / 2;
          n.fy = _this.height / 2;
        }
        if (typeof n.fx === "undefined" || n.fx === "") {
          n.fx = null;
        }
        if (typeof n.fy === "undefined" || n.fy === "") {
          n.fy = null;
        }
      });
      var links = [];
      lks.forEach(function(m) {
        var sourceNode = nodes.filter(function(n) {
          return n.uuid === m.sourceid;
        })[0];
        if (!sourceNode) return;
        var targetNode = nodes.filter(function(n) {
          return n.uuid === m.targetid;
        })[0];
        if (!targetNode) return;
        links.push({ source: sourceNode.uuid, target: targetNode.uuid, lk: m });
      });
      var data = {};
      data.nodes = nodes;
      data.links = links;
      return data;
    },
    updateGraph() {
      var _this = this;
      var data = _this.formatData();
      var nodes = data.nodes;
      var links = data.links;
      //定义按钮组引用的use元素
      _this.drawToolButton(nodes);
      // 更新节点
      var graphNode = _this.drawNode(nodes);
      // 更新节点文字
      var graphNodeText = _this.drawNodeText(nodes);
      // 更新按钮组
      var graphNodeButtonGroup = _this.drawButtonGroup(nodes);
      // 更新连线 links
      var graphLink = _this.drawLink(links);
      // 更新连线文字
      var graphLinkText = _this.drawLinkText(links);
      _this.simulation
        .nodes(nodes)
        .alphaTarget(0)
        .alphaDecay(0.05)
        .on("tick", ticked);
      function ticked() {
        // 更新连线坐标
        graphLink
          .attr("x1", function(d) {
            return d.source.x;
          })
          .attr("y1", function(d) {
            return d.source.y;
          })
          .attr("x2", function(d) {
            return d.target.x;
          })
          .attr("y2", function(d) {
            return d.target.y;
          });
        // 刷新连接线上的文字位置
        graphLinkText
          .attr("x", function(d) {
            if (!d.source.x || !d.target.x) return 0;
            var x = (parseFloat(d.source.x) + parseFloat(d.target.x)) / 2;
            return x;
          })
          .attr("y", function(d) {
            if (!d.source.y || !d.target.y) return 0;
            var y = (parseFloat(d.source.y) + parseFloat(d.target.y)) / 2;
            return y;
          });
        // 更新节点坐标
        graphNode
          .attr("cx", function(d) {
            return d.x;
          })
          .attr("cy", function(d) {
            return d.y;
          });
        // 更新节点操作按钮组坐标
        graphNodeButtonGroup
          .attr("cx", function(d) {
            return d.x;
          })
          .attr("cy", function(d) {
            return d.y;
          })
          .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ") scale(1)";
          });


        // 更新文字坐标
        graphNodeText
          .attr("x", function(d) {
            return d.x;
          })
          .attr("y", function(d) {
            return d.y;
          });
      }
      _this.simulation.force("link").links(links);
      _this.simulation.force(
        "center",
        d3.forceCenter(_this.width / 2, _this.height / 2)
      );
      _this.simulation.alpha(1).restart();
      // 鼠标滚轮缩放
      _this.zoom = d3
        .zoom()
        .scaleExtent([0.1, 4])
        .on("zoom", _this.zoomed);
      _this.svg.call(_this.zoom);
      // 静止双击缩放
      _this.svg.on("dblclick.zoom", null);
      //为按钮组绑定事件
      _this.bindEventButtonGroup();
      //在文本框显示json内容
      document.getElementById("text").value = JSON.stringify(
        this.graph,
        null,
        4
      );
    },
    dragStarted(d) {
      if (!d3.event.active) this.simulation.alphaTarget(0.8).restart();
      d.fx = d.x;
      d.fy = d.y;
    },
    dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    },
    dragEnded(d) {
      if (!d3.event.active) this.simulation.alphaTarget(0);
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    },
    zoomed() {
      d3.selectAll(".node").attr("transform", d3.event.transform);
      d3.selectAll(".nodetext text").attr("transform", d3.event.transform);
      d3.selectAll(".line").attr("transform", d3.event.transform);
      d3.selectAll(".linetext text").attr("transform", d3.event.transform);
      d3.selectAll(".nodebutton").attr("transform", d3.event.transform);
      //_this.svg.selectAll("g").attr("transform", d3.event.transform);
    },
    zoomClick(direction) {
      var self = this;
      var factor = 0.2;
      var targetZoom = 1;
      var extent = self.zoom.scaleExtent();
      targetZoom = 1 + factor * direction;
      if (targetZoom < extent[0] || targetZoom > extent[1]) {
        return false;
      }
      self.zoom.scaleBy(self.svg, targetZoom); // 执行该方法后 会触发zoom事件
    },
    zoomIn() {
      this.zoomClick(1);
    },
    zoomOut() {
      this.zoomClick(-1);
    },
    refresh() {
      console.log("111");
      this.svg.call(this.zoom.transform, d3.zoomIdentity);
    },
    changeFull() {
      console.log(this.isFullscreen);
      console.log("000");
      this.isFullscreen = !this.isFullscreen;
      if (this.isFullscreen) {
        let full = document.getElementById("kg_container");
        this.fullScreen(full);
      } else {
        this.exitFullScreen();
      }

      console.log(this.isFullscreen);
      console.log("111");
    },
    fullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    },
    exitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
    btnCollapseNode() {},
    btnOpenNode() {},
    close() {},

    exportPNG: function() {
      var serializer = new XMLSerializer();
      var newsvg = this.svg;
      console.log(newsvg);
      newsvg.selectAll(".nodebutton").remove();

      var source =
        '<?xml version="1.0" standalone="no"?>\r\n' +
        serializer.serializeToString(newsvg.node());
      var image = new Image();
      image.src =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
      var canvas = document.createElement("canvas");
      canvas.width = window.screen.width;
      canvas.height = window.screen.height;
      var context = canvas.getContext("2d");
      context.fillStyle = "#fff";
      context.fillRect(0, 0, 10000, 10000);
      context.drawImage(image, 0, 0);
      image.onload = function() {
        context.drawImage(image, 0, 0);
        var a = document.createElement("a");
        var timestamp = Date.parse(new Date());
        a.download = timestamp + ".png";
        a.href = canvas.toDataURL("image/png");
        a.click();
      };
    },
    exportJSON: function() {
      console.log(this.graph);
      var datastr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(this.graph, null, 4));
      var downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", datastr);
      var timestamp = Date.parse(new Date());
      downloadAnchorNode.setAttribute("download", timestamp + ".json");
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    exportXML: function() {
      var jsonstr = JSON.stringify(this.graph, null, 4); //json字符串
      var jsonob = JSON.parse(jsonstr); //转为json对象
      var xmlstr = this.$x2js.js2xml(jsonob); //转换为xml字符串
      var xml = "data:text/xml;charset=utf-8," + encodeURIComponent(xmlstr); //生成包含xml文件的地址以供下载
      var downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", xml);
      var timestamp = Date.parse(new Date());
      downloadAnchorNode.setAttribute("download", timestamp + ".xml");
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    exportSERVER: async function () {
      let body = { "node" : [], "relationship" : []};
      for (let currNode of this.graph.nodes) {
        body.node.push({"uuid": currNode.uuid, "name": currNode.name, "imgsrc": currNode.imgsrc})
      }
      for (let currLink of this.graph.links) {
        body.relationship.push({"sourceid": currLink.sourceid, "targetid": currLink.targetid, "name": currLink.name, "uuid": currLink.uuid})
      }
      console.log(body);

      try {
        await axios.post("http://localhost:8081/api/updateCoin", body);
        this.$message({
          type: "success",
          message: "保存成功！"
        });
      }
      catch (e) {
        this.$message({
          type: "info",
          message: "保存失败！"
        });
      }
    },
    restartPicture: function() {
      d3.select("svg").remove();
      this.initGraphContainer();
      this.addMaker();
      this.initGraph();
    },
    // 增加节点
    addNode() {
      this.isAddingNode = true;
      d3.select(".gid").style("cursor", "crosshair");
      let _this = this;
      var svg = d3.select("svg");
      let cursor = document.getElementById("gid").style.cursor;
      svg.on("click", function() {
        console.log(event.offsetX);
        var offsetX=event.offsetX;
        var offsetY=event.offsetY;
        if(cursor == 'crosshair' && _this.isAddingNode){
          _this
            .$confirm("是否加入该节点？", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })

            .then(() => {
              // var nName = document.getElementById("nameIn").value;
              var nName='新节点';
              console.log(nName);

              let newNode = {};
              newNode.name = nName;
              newNode.uuid = _this.uuidEndNum;
              _this.uuidEndNum ++;
              console.log(newNode.uuid);

              newNode.x = 0;
              newNode.y = 0;
              newNode.fx = offsetX;
              console.log('x');
              console.log(offsetX);
              newNode.fy = offsetY;
              _this.graph.nodes.push(newNode);

              _this.updateGraph();

              _this.$message({
                type: "success",
                message: "添加成功！"
              });
            })
            .catch(() => {
              _this.selectrelationid = "";
              _this.$message({
                type: "info",
                message: "操作已取消"
              });
            });
          d3.select(".gid").style("cursor", "");
          _this.isAddingNode=false;

        }

      })


    },
    // 删除节点
    deleteNode() {
      let _this = this;
      _this
        .$confirm("该操作暂时不可撤销", "将要删除该节点，是否继续？", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          var nName = document.getElementById("nameIn").value;
          console.log(nName);
          for (let i = 0; i < _this.graph.nodes.length; i++) {
            if (_this.graph.nodes[i].name === nName) {
              _this.graph.nodes.splice(i, 1);
              break;
            }
          }
          _this.updateGraph();
          console.log(_this.graph.links);
          _this.selectrelationid = "";
          _this.deleteNodeDialogVisible = true;
          _this.$message({
            type: "success",
            message: "删除成功！"
          });
        })
        .catch(() => {
          _this.selectrelationid = "";
          _this.$message({
            type: "info",
            message: "操作已取消"
          });
        });
    },
    // 修改节点名
    changeNode() {
      let _this = this;
      _this
        .$confirm("是否修改该节点？", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          var nName = document.getElementById("nameIn").value;
          var nNewName = document.getElementById("nameOut").value;
          console.log(nName);
          for (let i = 0; i < _this.graph.nodes.length; i++) {
            if (_this.graph.nodes[i].name === nName) {
              this.graph.nodes[i].name = nNewName;
              break;
            }
          }
          _this.updateGraph();
          console.log(_this.graph.links);
          _this.selectrelationid = "";
          _this.deleteNodeDialogVisible = true;
          _this.$message({
            type: "success",
            message: "修改成功！"
          });
        })
        .catch(() => {
          _this.selectrelationid = "";
          _this.$message({
            type: "info",
            message: "操作已取消"
          });
        });
    },
    // 增加联系
    addLink() {
      let _this = this;
      _this
        .$confirm("是否添加该关系？", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          var rName = document.getElementById("relNameIn").value;
          console.log(rName);
          let newLink = {};
          newLink.uuid = _this.uuidEndNum;
          _this.uuidEndNum++;
          var sourceName = document.getElementById("from_id").value;
          var targetName = document.getElementById("to_id").value;
          for (let m = 0; m < _this.graph.nodes.length; m++) {
            if (_this.graph.nodes[m].name === targetName) {
              newLink.targetid = _this.graph.nodes[m].uuid;
              break;
            }
          }
          for (let n = 0; n < _this.graph.nodes.length; n++) {
            if (_this.graph.nodes[n].name === sourceName) {
              newLink.sourceid = _this.graph.nodes[n].uuid;
              break;
            }
          }

          newLink.name = rName;
          console.log(newLink);
          _this.graph.links.push(newLink);
          _this.updateGraph();

          _this.$message({
            type: "success",
            message: "添加成功！"
          });
        })
        .catch(() => {
          _this.selectrelationid = "";
          // _this.isEditingLink = false
          // _this.emptyLinkEntity()
          // _this.EditLinkDialogVisible = false
          _this.$message({
            type: "info",
            message: "操作已取消"
          });
        });
    },
    // 删除联系
    deleteLink() {
      var sourceName = document.getElementById("from_id").value;
      var targetName = document.getElementById("to_id").value;
      console.log(sourceName);
      console.log(targetName);
      let _this = this;
      for (let m = 0; m < _this.graph.nodes.length; m++) {
        if (_this.graph.nodes[m].name === sourceName) {
          this.source = _this.graph.nodes[m].uuid;
          break;
        }
      }
      for (let n = 0; n < _this.graph.nodes.length; n++) {
        if (_this.graph.nodes[n].name === targetName) {
          this.target = _this.graph.nodes[n].uuid;
          break;
        }
      }
      _this
        .$confirm("该操作不可撤销", "将要删除该联系，是否继续？", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          for (let i = 0; i < _this.graph.links.length; i++) {
            if (
              _this.graph.links[i].sourceid === _this.source &&
              _this.graph.links[i].targetid === _this.target
            ) {
              _this.graph.links.splice(i, 1);
              break;
            }
          }
          _this.updateGraph();
          _this.selectrelationid = "";
          _this.deleteLinkDialogVisible = true;
          _this.$message({
            type: "success",
            message: "删除成功！"
          });
        })
        .catch(() => {
          _this.selectrelationid = "";
          _this.$message({
            type: "info",
            message: "操作已取消"
          });
        });
    },
    // 修改联系名
    changeLink() {
      var sourceName = document.getElementById("from_id").value;
      var targetName = document.getElementById("to_id").value;
      console.log(sourceName);
      console.log(targetName);
      let _this = this;
      for (let m = 0; m < _this.graph.nodes.length; m++) {
        if (_this.graph.nodes[m].name === sourceName) {
          this.source = _this.graph.nodes[m].uuid;
          break;
        }
      }
      for (let n = 0; n < _this.graph.nodes.length; n++) {
        if (_this.graph.nodes[n].name === targetName) {
          this.target = _this.graph.nodes[n].uuid;
          break;
        }
      }
      _this
        .$confirm("是否修改该关系？", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          var lNewName = document.getElementById("relNameOut").value;
          for (let i = 0; i < _this.graph.links.length; i++) {
            if (
              _this.graph.links[i].sourceid === _this.source &&
              _this.graph.links[i].targetid === _this.target
            ) {
              this.graph.links[i].name = lNewName;
              break;
            }
          }
          _this.updateGraph();
          _this.selectrelationid = "";
          _this.deleteLinkDialogVisible = true;
          _this.$message({
            type: "success",
            message: "修改成功！"
          });
        })
        .catch(() => {
          _this.selectrelationid = "";
          _this.$message({
            type: "info",
            message: "操作已取消"
          });
        });
    },

    change: function() {
      var _this = this;
      _this.graph = JSON.parse(document.getElementById("text").value);
      _this.updateGraph();
    },


  }
};
</script>
<style>
#sidemenu {
  display: none;
}

#sidemenu:checked ~ #aside {
  /*为被选中的sidemenu后的aside设置属性（紧邻）*/
  left: 0;
  /*点击按钮即选中checked后,侧边栏位置变为贴着左边,配合ease-out使用,有渐变滑出的效果*/
}

#sidemenu:checked ~ #wrap {
  /*为被选中的sidemenu后的wrap设置属性（非紧邻）*/
  padding-left: 320px;
}
.collapse-toggle{
  display: none;
}
.content{
  max-height: 0px;
  overflow: hidden;
  transition: 0.7s ease-in-out;
  background-color: rgba(196, 194, 194, 0.3);
  width:100%;
  border-width: 0;
  box-shadow: inset 0px 5px 8px 0px rgba(18, 29, 29, 0.15),
    /*上边阴影  */ inset 0px 0px 0px 0px rgba(18, 29, 29, 0.25),
    /*左边阴影 */ inset 0px 0px 0px 0px rgba(18, 29, 29, 0.25),
    /*右边阴影  */ inset 0px -5px 5px 0px rgba(18, 29, 29, 0); /*下边阴影  */

}
.collapse-toggle:checked~.content{
  max-height: 400px;
}

.collapse-toggle:checked ~label .el-icon-arrow-right{
  display: none;

}
.collapse-toggle:not(:checked) ~label .el-icon-arrow-down{
  display: none
}
.collapse-item{
  margin-top: 10px;
  border-radius: 10px
}



#aside {
  /*侧边栏,初始位置为-320px，即隐藏效果*/
  position: absolute;
  top: 0;
  bottom: 0;
  left: -320px;
  width: 320px;
  background: #74cbd2;
  box-shadow: 0px 0px 10px 0px rgba(18, 29, 29, 0.25),
    /*上边阴影  */ -10px 0px 10px 0px rgba(18, 29, 29, 0.25),
    /*左边阴影 */ 10px 0px 10px 0px rgba(18, 29, 29, 0.25),
    /*右边阴影  */ 0px 10px 10px 0px rgba(18, 29, 29, 0.25); /*下边阴影  */
  transition: 0.2s ease-out;
  overflow-y: auto;
  overflow-x: hidden;
  /*动画效果的执行方式是ease-out，即侧边栏滑动效果为渐变式，而不是生硬的突然变化*/
}

h2 {
  color: white;
  text-align: -moz-center;
  margin-left: 10px;
  font-size: 2em;
  text-shadow: 2px 2px 4px #999999;
}

h4 {
  color: white;
  text-align: left;
  margin-left: 25px;
  font-size: 1.4em;
  line-height: 0em;
  text-shadow: 2px 2px 2px #999999;
  width:95%

}

#download li {
  list-style: none;
  color: white;
  width: 100%;
  height: 1.6em;
  text-align: left;
  margin-left: 40px;
  font-size: 1.2em;
}

#adjust li {
  list-style: none;
  color: white;
  width: 100%;
  height: 1.6em;
  text-align: left;
  margin-left: 40px;
  font-size: 1.2em;
}
modify {
  margin-bottom: 10px;
  height: 330px;
}

.modify li {
  list-style: none;
  color: white;
  width: 20%;
  height: 1em;
  float: left;
  text-decoration-color: white;

  margin-bottom: 10px;
  margin-top: 0px;
  font-size: 1em;
}

.modify span {
  color: white;
  margin-bottom: 7px;
  line-height: 2em;
  margin-left: 50px;
  float: left;
}
.modify select {
  background: rgba(204, 204, 204, 0.5); /*半透明*/
  border: 0;
  border-radius: 4px;
  height: 18px;
  padding: 2px;
  outline-width: 5px;
  outline-color: rgba(204, 204, 204, 0.2);
  float: left;
  margin-top: 7px;
}
.modify input {
  background: rgba(204, 204, 204, 0.5); /*半透明*/
  border: 0;
  border-radius: 4px;
  outline-width: 5px;
  outline-color: rgba(204, 204, 204, 0.2);
  height: 14px;
  width: 115px;
  resize: none;
  line-height: 1em;
  margin-top: 7px;
  font-size: 1em;
  float: left;
}

.modify textarea {
  background: rgba(204, 204, 204, 0.35); /*半透明*/
  border: 0;
  border-radius: 4px;
  outline-width: 5px;
  outline-color: rgba(204, 204, 204, 0.2);
  height: 18px;
  width: 120px;
  text-align: justify;
  resize: none;
  line-height: 1em;
  margin-top: 8px;
  font-size: 1.1em;
  float: left;
  font-family: "方正雅黑";
  color: white;
}

a {
  text-decoration: none;
}

/*控制侧边栏进出的按钮（外部包裹）*/
#wrap {
  transition: 0.2s ease-out;
}

/*控制侧边栏进出的按钮（内部文字样式）*/
#wrap label {
  /*控制侧边栏进出的按钮*/
  background: white;
  border-radius: 70px;
  color: orange;
  cursor: pointer;
  display: block;
  font-family: Courier New;
  font-size: 2em;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5em;
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
  box-shadow: 0px 0px 10px 0px rgba(18, 29, 29, 0.1),
    /*上边阴影  */ -10px 0px 10px 0px rgba(18, 29, 29, 0.1),
    /*左边阴影 */ 10px 0px 10px 0px rgba(18, 29, 29, 0.1),
    /*右边阴影  */ 0px 10px 10px 0px rgba(18, 29, 29, 0.1); /*下边阴影  */
}
#wrap label:hover {
  background: #daddda;
  fill-opacity: 0.2;
}

#sideul li:hover {
  color: orange;
}


.svg-set-box0 textarea {
  left: 45px;
  right: 45px;
  height: 260px;
  width: 240px;
  /*background-color: transparent;*/
  background: rgba(204, 204, 204, 0.35); /*半透明*/
  color: white;
  resize: none;
  border: none;
  outline-width: 5px;
  outline-color: rgba(204, 204, 204, 0.2);
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 20px;
  margin-top: 10px;
  float: bottom;
}


ul,
li {
  list-style: none;
}
.toolbar li {
  float: left;
  width: 120px;
}

.toolbar li a {
  text-decoration: none;
  color: #606266;
}
.notshow {
  display: none;
}
.nodetext {
  pointer-events: all;
  cursor: pointer;
  stroke-dasharray: 0 0 0 0;
  stroke-dashoffset: 10;
  transition: all ease 0.1s;
}
.nodetext:hover {
  stroke-dashoffset: 0;
  stroke-dasharray: 100;
}
</style>
