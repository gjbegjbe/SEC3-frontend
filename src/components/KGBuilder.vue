<template>
  <div>
    <div>
      <el-dialog title="修改节点" :visible.sync="editNodeFormVisible" style="width: 1200px ;height:640px; left:20%">
        <el-form label-width="80px">
          <el-form-item label="节点ID">
            <el-input
              :disabled="true"
              v-model="editNodeUuid"
              class="withoutColor"
              style="width: 400px;float: left"
            ></el-input>
          </el-form-item>
          <el-form-item label="节点名称">
            <el-input
              :disabled="false"
              v-model="editNodeName"
              class="withoutColor"
              style="width: 400px;float: left"
            ></el-input>
          </el-form-item>
          <el-form-item label="节点颜色">
            <el-color-picker v-model="editNodeColor" style="float: left"></el-color-picker>
            <el-input
              :disabled="true"
              v-model="editNodeColor"
              class="lineColor"
              style="width: 340px;float: left;margin-left: 20px"
            ></el-input>
          </el-form-item>
          <el-form-item label="节点形状">
            <el-select v-model="editNodeShape" placeholder="请选择" style="float:left">
              <el-option
                v-for="item in shapes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="节点类型">
            <el-select v-model="editNodeType" placeholder="请选择" style="float:left">
              <el-option
                  v-for="item in types"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item  >
            <el-button type="primary" @click="saveNodeEdit" style="margin-top: 10px;float: left" >保存修改</el-button>
            <el-button @click="cancelNodeEdit" style="margin-top: 10px;float: left">取消</el-button>

          </el-form-item>
        </el-form>

      </el-dialog>
    </div>

    <input type="checkbox" id="sidemenu" />
    <div id="wrap">
      <label id="sideMenuControl" for="sidemenu">≡</label>
      <!--for 属性规定 label 与哪个表单元素绑定，即将这个控制侧边栏进出的按钮与checkbox绑定-->
    </div>

    <div id="aside">
      <h2>6PlusCOIN MENU</h2>
      <div class="collapse-item">
        <input type="checkbox" id="collapse0" class="collapse-toggle" />
        <label style="display: flex;" for="collapse0">
          <div>
            <h4>
              <i
                  class="el-icon-arrow-right"
                  style="transition: ease-in-out"
              ></i>
              统计 STATISTICS
            </h4>
          </div>
        </label>
        <div class="content">
          <div id="charts" style="width:280px;height:200px;margin-left: 25px"></div>
        </div>
      </div>
      <div class="collapse-item">
        <input type="checkbox" id="collapse1" class="collapse-toggle" />
        <label style="display: flex;" for="collapse1">
          <div>
            <h4>
              <i
                class="el-icon-arrow-right"
                style="transition: ease-in-out"
              ></i>
              导出 EXPORT
            </h4>
          </div>
        </label>

        <div class="content">
          <div class="collapse-card" id="download">
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
              <li><i class="el-icon-office-building"></i> 保存到服务器</li>
            </a>
          </div>
        </div>
      </div>

      <div class="collapse-item">
        <input type="checkbox" id="collapse2" class="collapse-toggle" />
        <label style="display: flex;" for="collapse2">
          <h4>
            <i class="el-icon-arrow-right"></i>
            调整 ADJUST
          </h4>
        </label>
        <div class="content">
          <div id="adjust" class="collapse-card">
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
              <li><i class="el-icon-refresh"></i> 还原图形</li>
            </a>
            <a href="javascript:;" @click="changeFull">
              <li><i class="el-icon-full-screen"></i> 全屏切换</li>
            </a>
            <a href="javascript:;" @click="zoomInNodeText">
              <li><i class="el-icon-zoom-in"></i> 放大节点字体</li>
            </a>
            <a href="javascript:;" @click="zoomOutNodeText">
              <li><i class="el-icon-zoom-out"></i> 缩小节点字体</li>
            </a>
            <a href="javascript:;" @click="refreshNodeText">
              <li><i class="el-icon-refresh-right"></i> 还原节点字体</li>
            </a>
            <a href="javascript:;" @click="changeLinkTextVisibility">
              <li><i class="el-icon-info"></i> 显示/隐藏关系文字</li>
            </a>
            <a href="javascript:;" @click="zoomInLinkText">
              <li><i class="el-icon-zoom-in"></i> 放大关系字体</li>
            </a>
            <a href="javascript:;" @click="zoomOutLinkText">
              <li><i class="el-icon-zoom-out"></i> 缩小关系字体</li>
            </a>
            <a href="javascript:;" @click="refreshLinkText">
              <li><i class="el-icon-refresh-right"></i> 还原关系字体</li>
            </a>

          </div>
        </div>
      </div>

      <div class="collapse-item">
        <input type="checkbox" id="collapse6" class="collapse-toggle" />
        <label style="display: flex;" for="collapse6">
          <h4>
            <i class="el-icon-arrow-right"></i>
            搜索 SEARCH
          </h4>
        </label>

        <div class="content">
          <div id="search" class="collapse-card">
            <div style="margin-bottom: 10px">
              <span style="font-size: 1.2em"> 节点名称：</span>
              <textarea id="nodeSearch"></textarea>
              <div class="search_menu" style="margin-bottom: 4px;float: left">
                <li v-for="item in historyList.nName" :key="item.id" @click="inputHistory(item, 0)">
                  {{ item }}
                </li>
              </div>
            </div>
            <div style="margin-bottom: 4px;float: left">
              <span style="font-size: 1.2em"> 关系名称：</span>
              <textarea id="relSearch"></textarea>
              <div class="search_menu" style="margin-bottom: 4px;float: left">
                <li v-for="item in historyList.lName" :key="item.id" @click="inputHistory(item, 1)">
                  {{ item }}
                </li>
              </div>
            </div>
            <div style="margin-bottom: 4px;float: left">
              <span style="font-size: 1.2em"> 类型检索：</span>
              <textarea id="typeSearch"></textarea>
              <div class="search_menu" style="margin-bottom: 4px;float: left">
                <li v-for="item in historyList.nType" :key="item.id" @click="inputHistory(item, 2)">
                  {{ item }}
                </li>
              </div>
            </div>

            <div>
              <a href="javascript:;" @click="search">
                <li style="margin-left:20%; margin-bottom:25px;">
                  <i class="el-icon-search"></i> 搜索
                </li>
              </a>
              <a href="javascript:;" @click="restartPicture">
                <li style=""><i class="el-icon-refresh"></i> 还原</li>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="collapse-item">
        <input type="checkbox" id="collapse7" class="collapse-toggle" />
        <label style="display: flex;" for="collapse7">
          <h4>
            <i class="el-icon-arrow-right"></i>
            类型过滤 FILTER
          </h4>
        </label>

        <div class="content">
          <div id="filter" class="collapse-card">
            <div style="margin-bottom: 4px;float: left">
              <span style="font-size: 1.2em"> 选择类型：</span>
              <textarea id="typeFilter"></textarea>
            </div>

            <div>
              <a href="javascript:;" @click="filter">
                <li style="margin-left:20%; margin-bottom:25px;">
                  <i class="el-icon-search"></i> 过滤
                </li>
              </a>
              <a href="javascript:;" @click="restartPicture">
                <li style=""><i class="el-icon-refresh"></i> 还原</li>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="collapse-item">
        <input type="checkbox" id="collapse3" class="collapse-toggle" />
        <label style="display: flex;" for="collapse3">
          <h4>
            <i class="el-icon-arrow-right"></i>
            编辑节点 NODE EDIT
          </h4>
        </label>
        <div class="content">
          <div id="modify1" class="collapse-card">
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
                  <i class="el-icon-circle-plus-outline"></i> 添加
                </li>
              </a>
              <a href="javascript:;" @click="deleteNode">
                <li style=""><i class="el-icon-remove-outline"></i> 删除</li>
              </a>
              <a href="javascript:;" @click="changeNode">
                <li style=""><i class="el-icon-edit"></i> 修改</li>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="collapse-item">
        <input type="checkbox" id="collapse4" class="collapse-toggle" />
        <label style="display: flex;" for="collapse4">
          <h4>
            <i class="el-icon-arrow-right"></i>
            编辑关系 LINK EDIT
          </h4>
        </label>
        <div class="content">
          <div class="collapse-card" id="modify2">
            <div style="margin-bottom: 10px">
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

            <div>
              <a href="javascript:;" @click="addLink">
                <li style="margin-left: 20%; margin-bottom:25px;">
                  <i class="el-icon-circle-plus-outline"></i> 添加
                </li>
              </a>
              <a href="javascript:;" @click="deleteLink">
                <li style=""><i class="el-icon-remove-outline"></i> 删除</li>
              </a>
              <a href="javascript:;" @click="changeLink">
                <li style=""><i class="el-icon-edit"></i> 修改</li>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse-item">
        <input type="checkbox" id="collapse5" class="collapse-toggle" />
        <label style="display: flex;" for="collapse5">
          <h4>
            <i class="el-icon-arrow-right"></i>
            文本编辑 JSON EDIT
          </h4>
        </label>

        <div class="content">
          <div class="svg-set-box0">
            <a>
              <li>
                <textarea id="text"></textarea>
              </li>
            </a>
            <a href="javascript:;" @click="change">
              <li
                style="float: left;margin-left: 35px;margin-bottom:20px;font-size: 1.2em;color: white;"
              >
                <i class="el-icon-edit-outline"></i> 文档修改
              </li>
            </a>
          </div>
        </div>
      </div>
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
// import echarts from "echarts";

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
      selected: {
        nodes: [],
        links: [],
        linksIn: [],
        linksOut: [],
        sourceNodes: [],
        targetNodes: []
      },
      historyList: {
        nName: [],
        lName: [],
        nType: []
      },
      defaultR: 30,
      colorList: [
        'rgb(255,131,115)',
        'rgb(249,198,44)',
        'rgb(127,127,213)',
        'rgb(125,213,255)',
        'rgb(112,211,189)',
        'rgb(234,145,176)',
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

      txx: "",
      tyy: "",
      //
      // selectrelationid: '',//选择操作的关系id
      //
      // deleteLinkDialogVisible:true
      isToolButtonShow: false,

      isAddingNode: false,
      shape: 5, //2 圆形图片 1 正方形 3 待实现 4 圆角矩形 5 倒三角 6 正三角 7 五角星 8 菱形

      editNodeFormVisible: false, //编辑节点窗口是否显示
      editNodeUuid: "", //正在编辑的节点id
      editNodeName: "", //正在编辑的节点名称
      editNodeColor: "", //正在编辑的节点颜色
      editNodeShape: "", //正在编辑的节点形状
      editNodeType: "", // 正在编辑的节点类型

      shapes: [
        {
          value: "piccircle",
          label: "带图片圆形"
        },
        {
          value: "square",
          label: "正方形"
        },
        {
          value: "diamond",
          label: "菱形"
        },
        {
          value: "star",
          label: "五角星"
        },
        {
          value: "triangle",
          label: "三角形"
        },
        {
          value: "downtriangle",
          label: "倒三角形"
        },
        {
          value: "roundrectangle",
          label: "圆角矩形"
        },
        {
          value: "square",
          label: "正方形"
        },
        {
          value: "circle",
          label: "圆形"
        }
      ],
      types: [
        {
          value: "人物",
          label: "人物"
        },
        {
          value: "地点",
          label: "地点"
        },
        {
          value: "作品",
          label: "作品"
        },
      ],

      nodeTextSize: 12, // 节点字体大小
      linkTextSize: 10, // 关系字体大小
      linkTextVisible: true, //是否显示关系文字

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
      this.qaGraphLink = this.svg
        .append("g")
        .attr("class", "linkline")
        .attr("id", "g1");
      this.qaGraphLinkText = this.svg
        .append("g")
        .attr("class", "linktext")
        .attr("id", "g2");
      this.qaGraphNode = this.svg
        .append("g")
        .attr("class", "node")
        .attr("id", "g3");
      this.qaGraphNodeText = this.svg
        .append("g")
        .attr("class", "nodetext")
        .attr("id", "g4");
      this.nodebuttonGroup = this.svg
        .append("g")
        .attr("class", "nodebutton")
        .attr("id", "g5");
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
        if (response.data.node.length === 0)
          response = await axios.get("/static/kgData.json", {});
      } catch (e) {
        response = await axios.get("/static/kgData.json", {});
      }

      let data = response.data;
      console.log(data);
      this.graph.nodes = data.node;
      this.graph.links = data.relationship;

      for (let node of this.graph.nodes) {
        if (node.uuid + 1 > this.uuidEndNum) this.uuidEndNum = node.uuid + 1;
      }
      for (let link of this.graph.links) {
        if (link.uuid + 1 > this.uuidEndNum) this.uuidEndNum = link.uuid + 1;
      }

      this.updateGraph();
      this.getPie();

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
        .attr("class", "arrowmarker")
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
      var nodeEnter = node
        .enter()
        .append("circle")
        .style("stroke-width", 0);

      nodeEnter.on("click", function(d) {
        console.log("触发单击");
        _this.selectUuid = d.uuid;
        var out_buttongroup_id = ".out_buttongroup_" + d.uuid;
        var selectItem = d3.select(out_buttongroup_id)._groups[0][0];
        if (
          selectItem.classList.contains("notshow") &&
          !_this.isToolButtonShow
        ) {
          _this.isToolButtonShow = true;
          _this.svg.selectAll(".buttongroup").classed("notshow", true);
          d3.select(out_buttongroup_id)
            .classed("notshow", false)
            .attr("transform", function(d) {
              //console.log("we are trans")
              return "translate(" + d.x + "," + d.y + ") scale(1)";
            });
        } else {
          _this.isToolButtonShow = false;
          d3.select(out_buttongroup_id).classed("notshow", true);
        }
        event.stopPropagation();
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
        d3.selectAll(".linkline")
          .style("stroke-opacity", 1)
          .style("stroke-width", 1);
        d3.selectAll(".linktext").style("fill-opacity", 1);
        d3.selectAll(".arrowmarker").style("fill-opacity", 1);
      });
      nodeEnter.on("mouseover", function(d) {
        //todo鼠标放上去只显示相关节点，其他节点和连线隐藏
        d3.selectAll(".node").style("fill-opacity", 0.1);
        const relvantNodeIds = [];
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
        d3.selectAll(".linkline").style("stroke-opacity", 0.1);
        d3.selectAll(".arrowmarker").style("fill-opacity", 0.5);
        //console.log(d3.selectAll(".arrowmarker"));
        //显示相关的连线
        _this.qaGraphLink
          .selectAll(".linkline")
          .style("stroke-opacity", function(c) {
            if (c.lk.targetid === d.uuid || c.lk.sourceid === d.uuid) {
              //console.log(c);
              return 1.0;
            }
          })
          .style("stroke-width", function(c) {
            if (c.lk.targetid === d.uuid || c.lk.sourceid === d.uuid) {
              //console.log(c);
              return 1.5;
            }
          });

        //透明所有连线文字
        _this.qaGraphLinkText.selectAll(".linktext").style("fill-opacity", 0.1);
        //console.log("we did s1!")

        //显示相关的连线文字
        _this.qaGraphLinkText
          .selectAll(".linktext")
          .style("fill-opacity", function(c) {
            if (c.lk.targetid === d.uuid || c.lk.sourceid === d.uuid) {
              // console.log("we are in 2");
              // console.log(c);
              // console.log(d.uuid)
              return 1.0;
            }
            return 0.1;
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
          // return _this.colorList[d.color-1];
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
        switch (d.shape) {
          case "piccircle":
            //圆形填充图片
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
            //console.log(d.r);
            return "url(#catpattern" + i + ")";

          case "square":
            //正方形
            var rect_w = 30,
              rect_h = 30;
            var rectpattern = defs
              .append("pattern")
              .attr("id", "recttest" + i)
              .attr("height", 1)
              .attr("width", 1);

            rectpattern
              .append("rect")
              .attr("x", -(rect_w / 2 - d.r))
              .attr("y", -(rect_h / 2 - d.r))
              .attr("width", rect_w)
              .attr("height", rect_h)
              .attr("fill", d.color);
            return "url(#recttest" + i + ")";

          case "roundrectangle":
            //圆角矩形
            var ec_x = 50,
              ec_y = 30;
            var ecpattern = defs
              .append("pattern")
              .attr("id", "ectest" + i)
              .attr("height", 1)
              .attr("width", 1);

            ecpattern
              .append("rect")
              .attr("x", -(ec_x / 2 - d.r))
              .attr("y", -(ec_y / 2 - d.r))
              .attr("width", ec_x)
              .attr("height", ec_y)
              .attr("rx", 10)
              .attr("fill", d.color);
            return "url(#ectest" + i + ")";

          case "downtriangle":
            //倒三角
            var tri_down_pattern = defs
              .append("pattern")
              .attr("id", "tri_down_pattern" + i)
              .attr("height", 1)
              .attr("width", 1);

            tri_down_pattern
              .append("polygon")
              .attr("points", "30,55 10,20 50,20")
              .attr("fill", d.color);
            return "url(#tri_down_pattern" + i + ")";

          case "triangle":
            var tri_up_pattern = defs
              .append("pattern")
              .attr("id", "tri_up_test" + i)
              .attr("height", 1)
              .attr("width", 1);

            tri_up_pattern
              .append("polygon")
              .attr("points", "30,10 10,45 50,45")
              .attr("fill", d.color);
            return "url(#tri_up_test" + i + ")";

          case "star":
            //五角星

            var five_p_star_pattern = defs
              .append("pattern")
              .attr("id", "five_p_star_test" + i)
              .attr("height", 1)
              .attr("width", 1);

            five_p_star_pattern
              .append("polygon")
              .attr("points", "30,10 19,46 48,24 12,24 42,46")
              .attr("fill", d.color);
            return "url(#five_p_star_test" + i + ")";

          case "diamond":
            //菱形
            var diamond_pattern = defs
              .append("pattern")
              .attr("id", "diamond_test" + i)
              .attr("height", 1)
              .attr("width", 1);

            diamond_pattern
              .append("polygon")
              .attr("points", "30,10 50,30 30,50 10,30")
              .attr("fill", d.color);
            return "url(#diamond_test" + i + ")";

          default:
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
        .attr("font-size", this.nodeTextSize)
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
      //  console.log(links);
      var _this = this;
      var link = this.qaGraphLink
        .selectAll(".linkline")
        .data(links, function(d) {
          return d.uuid;
        });
      link.exit().remove();

      var linkEnter = link
        .enter()
        .append("path")
        .attr("class", "linkline")
        .attr("id", function(d, i) {
          return "linkline" + i;
        })
        .attr("stroke-width", 1)
        .attr("stroke", function() {
          return _this.colorList[2];
        })
        .attr("marker-end", "url(#arrow)");

      linkEnter.on("mouseenter", function() {
        console.log(this);
      });
      linkEnter.call(
        d3
          .drag()
          .on("start", _this.dragStarted)
          .on("drag", _this.dragged)
          .on("end", _this.dragEnded)
      );

      link = linkEnter.merge(link);
      return link;
    },
    drawLinkText(links) {
      var _this = this;
      var linktext = _this.qaGraphLinkText
        .selectAll(".linktext")
        .data(links, function(d) {
          return d.uuid;
        });
      linktext.exit().remove();
      if(this.linkTextVisible){
        var linktextEnter = linktext
            .enter()
            .append("text")
            .attr("class", "linktext")
            .attr("font-family", "微软雅黑")
            .style("fill", "#888888")
            .style("font-size", this.linkTextSize)
            .style("textAnchor", "middle")
            .append("textPath")
            .attr("class", "linktext")
            .attr("startOffset", "50%")
            .attr("xlink:href", function(d, i) {
              return "#linkline" + i;
            })
            .text(function(d) {
              return d.lk.name;
            });
        linktext = linktextEnter.merge(linktext).text(function(d) {
          return d.lk.name;
        });
        linktextEnter.call(
            d3
                .drag()
                .on("start", _this.dragStarted)
                .on("drag", _this.dragged)
                .on("end", _this.dragEnded)
        );
      }

      return linktext;
    },
    drawButtonGroup(nodes) {
      var _this = this;
      var nodebutton = _this.nodebuttonGroup
        .selectAll("nodebutton")
        .data(nodes, function(d) {
          //   console.log("we do it for" + d.uuid);
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
          //console.log("!!!"+d.uuid);
          return "buttongroup out_buttongroup_" + d.uuid;
        })
        .classed("notshow", true);
      nodebutton = nodebuttonEnter.merge(nodebutton);

      return nodebutton;
    },
    drawToolButton(nodes) {
      var _this = this;
      //先删除所有为节点自定义的按钮组
      d3.selectAll("svg >defs").remove();

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
            .attr("stroke", "#50658a")
            .attr("stroke-width", 2.5)
            .attr("stroke-opacity", 0.3)
            .attr("id", function(d, i) {
              //console.log("!"+d.uuid);
              return "buttonarc" + i + ".";
            });

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
            .attr("font-size", 10)
            .append("textPath")
            .attr("xlink:href", function(d, i) {
              return "#buttonarc" + i + "." + _this.selectUuid;
            });
        }
      });
    },
    bindEventButtonGroup() {
      //给按钮绑定事件
      var _this = this;
      //按钮组事件绑定
      _this.toolbarData.forEach(function(m) {
        var btnClass = ".action_" + m.code;
        _this.svg.selectAll(btnClass).on("click", function(d) {
          console.log(
            d.data.name + ":" + d.data.code + ":uuid:" + _this.selectUuid
          );
          switch (d.data.code) {
            case "append":
              break;
            case "edit":
              _this.editNodeFormVisible = true;
              _this.editNodeUuid = _this.selectUuid;
              for (let i = 0; i < _this.graph.nodes.length; i++) {
                if (_this.graph.nodes[i].uuid === _this.editNodeUuid) {
                  _this.editNodeName = _this.graph.nodes[i].name;
                  _this.editNodeColor = _this.graph.nodes[i].color;
                  _this.editNodeShape = _this.graph.nodes[i].shape;
                  _this.editNodeType = _this.graph.nodes[i].type;
                }
              }
              break;
            case "more":
              break;
            case "link":
              break;
            case "delete":
              _this
                .$confirm("该操作暂时不可撤销", "将要删除该节点，是否继续？", {
                  confirmButtonText: "确定",
                  cancelButtonText: "取消",
                  type: "warning"
                })
                .then(() => {
                  var selectDeleteUuid = _this.selectUuid;
                  //console.log(selectDeleteUuid);
                  for (let i = 0; i < _this.graph.nodes.length; i++) {
                    if (_this.graph.nodes[i].uuid === selectDeleteUuid) {
                      _this.graph.nodes.splice(i, 1);
                      break;
                    }
                  }
                  _this.updateGraph();
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
              break;
          }
          console.log(_this.editNodeFormVisible);
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
          .attr("d", function(d) {
            return (
              "M" +
              d.source.x +
              " " +
              d.source.y +
              "L" +
              d.target.x +
              " " +
              d.target.y
            );
          })
          .attr("id", function(d, i) {
            return "linkline" + i;
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
          });

        //console.log(graphNodeButtonGroup);

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
      // console.log("i m dragged!");
      this.svg.selectAll(".buttongroup").classed("notshow", true);
      if (!d3.event.active) this.simulation.alphaTarget(0.8).restart();
      d.fx = d.x;
      d.fy = d.y;
    },
    dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    },
    dragEnded(d) {
      //  console.log("i m dragged over!");
      if (!d3.event.active) this.simulation.alphaTarget(0);
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    },
    zoomed() {
      //
      //console.log(d3.selectAll('g'))

      d3.select("#g1").attr("transform", d3.event.transform);
      d3.select("#g2").attr("transform", d3.event.transform);
      d3.select("#g3").attr("transform", d3.event.transform);
      d3.select("#g4").attr("transform", d3.event.transform);
      d3.select("#g5").attr("transform", d3.event.transform);
      //d3.selectAll(".nodebutton").attr("transform", d3.event.transform);*/

      //d3.selectAll("g").attr("transform", d3.event.transform);
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
      //  console.log("111");
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
    zoomInNodeText() {
      var _this=this;
      _this.nodeTextSize+=1;
      _this.drawNodeText(_this.graph.nodes);
    },
    zoomOutNodeText() {
      var _this=this;
      _this.nodeTextSize-=1;
      _this.drawNodeText(_this.graph.nodes);
    },
    refreshNodeText() {
      var _this=this;
      _this.nodeTextSize=12;
      _this.drawNodeText(_this.graph.nodes);
    },
    changeLinkTextVisibility(){
      var _this=this;
      _this.linkTextVisible=!_this.linkTextVisible;
      _this.updateGraph();
    },
    zoomInLinkText() {
      var _this=this;
      _this.linkTextSize+=1;
      _this.updateGraph();
    },
    zoomOutLinkText() {
      var _this=this;
      _this.linkTextSize-=1;
      _this.updateGraph();
    },
    refreshLinkText() {
      var _this=this;
      _this.linkTextSize=10;
      _this.updateGraph();
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
    exportSERVER: async function() {
      let body = { node: [], relationship: [] };
      for (let currNode of this.graph.nodes) {
        body.node.push({
          uuid: currNode.uuid,
          name: currNode.name,
          imgsrc: currNode.imgsrc,
          type: currNode.type,
          shape: currNode.shape,
          color: currNode.color
        });
      }
      for (let currLink of this.graph.links) {
        body.relationship.push({
          sourceid: currLink.sourceid,
          targetid: currLink.targetid,
          name: currLink.name,
          uuid: currLink.uuid
        });
      }
      console.log(body);

      try {
        await axios.post("http://localhost:8081/api/updateCoin", body);
        this.$message({
          type: "success",
          message: "保存成功！"
        });
      } catch (e) {
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
        var offsetX = event.offsetX;
        var offsetY = event.offsetY;
        if (cursor == "crosshair" && _this.isAddingNode) {
          _this
            .$confirm("是否加入该节点？", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })

            .then(() => {
              // var nName = document.getElementById("nameIn").value;
              var nName = "新节点";
              console.log(nName);

              let newNode = {};
              newNode.name = nName;
              newNode.uuid = _this.uuidEndNum;
              newNode.color = 3;
              _this.uuidEndNum++;
              console.log(newNode.uuid);

              newNode.x = 0;
              newNode.y = 0;
              newNode.fx = offsetX;
              console.log("x");
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
          _this.isAddingNode = false;
        }
      });
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

    cancelNodeEdit() {
      var _this = this;
      _this.editNodeFormVisible = false;
      _this.editNodeUuid = "";
      _this.editNodeName = "";
      _this.editNodeColor = "";
      _this.editNodeShape = "";
      _this.editNodeType = "";
    },

    saveNodeEdit() {
      var _this = this;
      _this.editNodeFormVisible = false;
      for (let i = 0; i < _this.graph.nodes.length; i++) {
        if (_this.graph.nodes[i].uuid === _this.editNodeUuid) {
          _this.graph.nodes[i].name = _this.editNodeName;
          _this.graph.nodes[i].color = _this.editNodeColor;
          _this.graph.nodes[i].shape = _this.editNodeShape;
          _this.graph.nodes[i].type = _this.editNodeType;
        }
      }
      _this.updateGraph();
      _this.editNodeUuid = "";
      _this.editNodeName = "";
      _this.editNodeColor = "";
      _this.editNodeShape = "";
      _this.editNodeType = "";
      _this.getPie();
    },

    async search() {
      let _this = this;
      // clear
      for (let i = 0; i < _this.graph.nodes.length; i++) {
        for (let j = 0; j < _this.selected.sourceNodes.length; j++) {
          //上级节点
          if (
            _this.graph.nodes[i].uuid === _this.selected.sourceNodes[j].uuid
          ) {
            this.graph.nodes[i].shape = "triangle";
            this.graph.nodes[i].imgsrc = "";
          }
        }
        for (let j = 0; j < _this.selected.targetNodes.length; j++) {
          //下级节点
          if (
            _this.graph.nodes[i].uuid === _this.selected.targetNodes[j].uuid
          ) {
            this.graph.nodes[i].shape = "downtriangle";
            this.graph.nodes[i].imgsrc = "";
          }
        }
        for (let j = 0; j < _this.selected.nodes.length; j++) {
          if (_this.graph.nodes[i].uuid === _this.selected.nodes[j].uuid) {
            //目标节点
            this.graph.nodes[i].shape = "star";
            this.graph.nodes[i].imgsrc = "";
          }
        }
      }
      this.selected.nodes.splice(0, _this.selected.nodes.length);
      this.selected.linksIn.splice(0, _this.selected.linksIn.length);
      this.selected.linksOut.splice(0, _this.selected.linksOut.length);
      this.selected.sourceNodes.splice(0, _this.selected.sourceNodes.length);
      this.selected.targetNodes.splice(0, _this.selected.targetNodes.length);
      // get
      var nName = document.getElementById("nodeSearch").value;
      if (nName !== "") {
        this.searchVal(nName, 0);
      }
      var lName = document.getElementById("relSearch").value;
      if (lName !== "") {
        this.searchVal(lName, 1);
      }
      var nType = document.getElementById("typeSearch").value;
      if (nType !== "") {
        this.searchVal(nType, 2);
      }
      console.log(nName, nType, lName);

      //优先节点名搜索
      if (nName !== "") {
        // 以下检索出目标节点
        for (let i = 0; i < _this.graph.nodes.length; i++) {
          //所有满足名称模糊要求的节点搜索
          if (_this.graph.nodes[i].name.indexOf(nName)!==-1) {
            this.selected.nodes.push(_this.graph.nodes[i]);
          }
        }
        if (nType !== "") {
          //带类型要求的节点搜索
          for (let j = 0; j < _this.selected.nodes.length; j++) {
            if (_this.selected.nodes[j].type.indexOf(nType)===-1) {
              this.selected.nodes.splice(j, 1);
            }
          }
        }

        // 以下检索出相关关系及关联节点
        for (let m = 0; m < _this.selected.nodes.length; m++) {
          //将与检索出节点有关的关系列出
          for (let n = 0; n < _this.graph.links.length; n++) {
            if (
              _this.selected.nodes[m].uuid === _this.graph.links[n].sourceid
            ) {
              //由目标节点指出的关系
              this.selected.linksOut.push(_this.graph.links[n]);
            } else if (
              _this.selected.nodes[m].uuid === _this.graph.links[n].targetid
            ) {
              //向目标节点指入的关系
              this.selected.linksIn.push(_this.graph.links[n]);
            }
          }
        }
        if (lName !== "") {
          //按关系名筛选
          for (let k = 0; k < _this.selected.linksIn.length; k++) {
            if (_this.selected.linksIn[k].name.indexOf(lName)===-1 ) {
              this.selected.linksIn.splice(k, 1);
              k--;
            }
          }
          for (let l = 0; l < _this.selected.linksOut.length; l++) {
            if (_this.selected.linksOut[l].name.indexOf(lName)===-1) {
              this.selected.linksOut.splice(l, 1);
              l--;
            }
          }
        }
        for (let i = 0; i < _this.graph.nodes.length; i++) {
          //将与检索出节点有关的节点列出
          for (let p = 0; p < _this.selected.linksIn.length; p++) {
            //相关源节点
            if (
              _this.graph.nodes[i].uuid === _this.selected.linksIn[p].sourceid
            ) {
              this.selected.sourceNodes.push(_this.graph.nodes[i]);
            }
          }
          for (let q = 0; q < _this.selected.linksOut.length; q++) {
            //相关目标节点
            if (
              _this.graph.nodes[i].uuid === _this.selected.linksOut[q].targetid
            ) {
              this.selected.targetNodes.push(_this.graph.nodes[i]);
            }
          }
        }
      }

      //无节点名的情况下优先节点类型搜索
      else if (nType !== "") {
        // 以下检索出目标节点
        for (let i = 0; i < _this.graph.nodes.length; i++) {
          //所有满足类型要求的节点搜索
          if (_this.graph.nodes[i].type.indexOf(nType)!==-1) {
            this.selected.nodes.push(_this.graph.nodes[i]);
          }
        }

        // 以下检索出相关关系及关联节点
        if (lName !== "") {
          //按关系名筛选
          for (let m = 0; m < _this.selected.nodes.length; m++) {
            //将与检索出节点有关的关系列出
            for (let n = 0; n < _this.graph.links.length; n++) {
              if (
                _this.selected.nodes[m].uuid === _this.graph.links[n].sourceid
              ) {
                //由目标节点指出的关系
                this.selected.linksOut.push(_this.graph.links[n]);
              } else if (
                _this.selected.nodes[m].uuid === _this.graph.links[n].targetid
              ) {
                //向目标节点指入的关系
                this.selected.linksIn.push(_this.graph.links[n]);
              }
            }
          }
          for (let k = 0; k < _this.selected.linksIn.length; k++) {
            if (_this.selected.linksIn[k].name.indexOf(lName)===-1 ) {
              this.selected.linksIn.splice(k, 1);
              k--;
            }
          }
          for (let l = 0; l < _this.selected.linksOut.length; l++) {
            if (_this.selected.linksOut[l].name.indexOf(lName)===-1) {
              this.selected.linksOut.splice(l, 1);
              l--;
            }
          }
        }
        for (let i = 0; i < _this.graph.nodes.length; i++) {
          //将与检索出节点有关的节点列出
          for (let p = 0; p < _this.selected.linksIn.length; p++) {
            //相关源节点
            if (
              _this.graph.nodes[i].uuid === _this.selected.linksIn[p].sourceid
            ) {
              this.selected.sourceNodes.push(_this.graph.nodes[i]);
            }
          }
          for (let q = 0; q < _this.selected.linksOut.length; q++) {
            //相关目标节点
            if (
              _this.graph.nodes[i].uuid === _this.selected.linksOut[q].targetid
            ) {
              this.selected.targetNodes.push(_this.graph.nodes[i]);
            }
          }
        }
      }

      //关系搜索
      else if (lName !== "") {
        // 以下检索出目标关系及关系双方节点
        for (let i = 0; i < _this.graph.links.length; i++) {
          //所有满足名称要求的关系搜索
          if (_this.graph.links[i].name.indexOf(lName)!==-1) {
            this.selected.links.push(_this.graph.links[i]);
            for (let j = 0; j < _this.graph.nodes.length; j++) {
              //将检索出关系的源节点在对应位置列出
              if (_this.graph.nodes[j].uuid === _this.graph.links[i].sourceid) {
                this.selected.sourceNodes.push(_this.graph.nodes[j]);
              } else if (
                _this.graph.nodes[j].uuid === _this.graph.links[i].targetid
              ) {
                //将检索出关系的目标节点在对应位置列出
                this.selected.targetNodes.push(_this.graph.nodes[j]);
              }
            }
          }
        }
      }

      console.log(_this.selected);

      for (let i = 0; i < _this.graph.nodes.length; i++) {
        for (let j = 0; j < _this.selected.sourceNodes.length; j++) {
          //上级节点
          if (
            _this.graph.nodes[i].uuid === _this.selected.sourceNodes[j].uuid
          ) {
            this.graph.nodes[i].shape = "piccircle";
            this.graph.nodes[i].imgsrc =
              "https://ftp.bmp.ovh/imgs/2021/04/8936ebaa1cae405e.png";
          }
        }
        for (let j = 0; j < _this.selected.targetNodes.length; j++) {
          //下级节点
          if (
            _this.graph.nodes[i].uuid === _this.selected.targetNodes[j].uuid
          ) {
            this.graph.nodes[i].shape = "piccircle";
            this.graph.nodes[i].imgsrc =
              "https://ftp.bmp.ovh/imgs/2021/04/bba912c80570087a.png";
          }
        }
        for (let j = 0; j < _this.selected.nodes.length; j++) {
          if (_this.graph.nodes[i].uuid === _this.selected.nodes[j].uuid) {
            //目标节点
            this.graph.nodes[i].shape = "piccircle";
            this.graph.nodes[i].imgsrc =
              "https://ftp.bmp.ovh/imgs/2021/04/b699004a2fa6b17d.png";
          }
        }
      }
      this.updateGraph();
      await _this.$message({
        type: "success",
        message: "搜索完成！"
      });
      if ((nName !== "" || nType !== "") && _this.selected.nodes.length === 0) {
        await _this.$message({
          type: "warning",
          message: "未找到目标节点！"
        });
      }
      if (
        (nName !== "" || nType !== "") &&
        lName !== "" &&
        _this.selected.linksIn.length === 0 &&
        _this.selected.linksOut.length === 0
      ) {
        await _this.$message({
          type: "warning",
          message: "未找到目标节点的目标关系！"
        });
      }
      if (
        nName === "" &&
        nType === "" &&
        lName !== "" &&
        _this.selected.links.length === 0
      ) {
        await _this.$message({
          type: "warning",
          message: "未找到目标关系！"
        });
      }
    },

    inputHistory(item, i) {
      switch (i){
        case 0:
          document.getElementById("nodeSearch").value=item;
          break;
        case 1:
          document.getElementById("relSearch").value=item;
          break;
        case 2:
          document.getElementById("typeSearch").value=item;
          break;
      }
    },

    searchVal (val, i) {
      switch (i){
        case 0:
          val = val.trim() // 清除空格
          if (this.historyList.nName.length > 0) { // 有数据的话 判断
            if (this.historyList.nName.indexOf(val) !== -1) { // 有相同的，先删除 再添加
              this.historyList.nName.splice(this.historyList.nName.indexOf(val), 1)
              this.historyList.nName.unshift(val)
            } else { // 没有相同的 添加
              this.historyList.nName.unshift(val)
            }
          } else { // 没有数据 添加
            this.historyList.nName.unshift(val)
          }
          if (this.historyList.nName.length > 6) { // 保留六个值
            this.historyList.nName.pop()
          }
          break;
        case 1:
          val = val.trim() // 清除空格
          if (this.historyList.lName.length > 0) { // 有数据的话 判断
            if (this.historyList.lName.indexOf(val) !== -1) { // 有相同的，先删除 再添加
              this.historyList.lName.splice(this.historyList.lName.indexOf(val), 1)
              this.historyList.lName.unshift(val)
            } else { // 没有相同的 添加
              this.historyList.lName.unshift(val)
            }
          } else { // 没有数据 添加
            this.historyList.lName.unshift(val)
          }
          if (this.historyList.lName.length > 6) { // 保留六个值
            this.historyList.lName.pop()
          }
          break;
        case 2:
          val = val.trim() // 清除空格
          if (this.historyList.nType.length > 0) { // 有数据的话 判断
            if (this.historyList.nType.indexOf(val) !== -1) { // 有相同的，先删除 再添加
              this.historyList.nType.splice(this.historyList.nType.indexOf(val), 1)
              this.historyList.nType.unshift(val)
            } else { // 没有相同的 添加
              this.historyList.nType.unshift(val)
            }
          } else { // 没有数据 添加
            this.historyList.nType.unshift(val)
          }
          if (this.historyList.nType.length > 6) { // 保留六个值
            this.historyList.nType.pop()
          }
          break;
      }
    },

    filter() {
      let _this = this;
      var type = document.getElementById("typeFilter").value;
      console.log(type);
      for (let i = 0; i < _this.graph.nodes.length; i++) {
        //所有满足类型要求的节点搜索
        if (_this.graph.nodes[i].type.indexOf(type)===-1) {
          this.graph.nodes.splice(i,1);
          i--;
        }
      }
      console.log(this.graph);
      this.updateGraph();
      _this.$message({
        type: "success",
        message: "过滤完成！"
      });
    },

    getPie() {
      var echarts1 = require('echarts');
      var myChart = echarts1.init(document.getElementById('charts'));
      var chartsdata=[];
      var times = {};

      console.log(this.graph.nodes.length);
      for (var i=0;i<this.graph.nodes.length;i++){
        if (Object.prototype.hasOwnProperty.call(times, this.graph.nodes[i].type)) {
          times[this.graph.nodes[i].type]++;
        } else {
          times[this.graph.nodes[i].type] = 1;
        }
      };
      for (var key in times){
        console.log(key);
        console.log(times[key]);
        var temp={};
        temp['value']=times[key];
        temp['name']=key;
        chartsdata.push(temp);
      }
      console.log(chartsdata);
      console.log(times);
      myChart.setOption({
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['30%','55%'],
            //top: '10%',
            itemStyle: {
              normal: {
                // 阴影的大小
                shadowBlur: 15,
                // 阴影水平方向上的偏移
                shadowOffsetX: 0,
                // 阴影垂直方向上的偏移
                shadowOffsetY: 0,
                // 阴影颜色
                shadowColor: 'rgba(0,0,0,0.5)',
              }
            },
            data:chartsdata,
            label:{
              //minMargin: 5,
              edgeDistance: 10,
              //lineHeight: 15,
              color: 'rgba(255, 255, 255, 1)',
              alignTo: 'edge',
              formatter: '{b|{b}}\n{c|nums:{c}}',
              rich:{
                b:{
                  //color:'rgba(255, 255, 255, 0.5)',
                },
                c:{
                  color:'rgba(255, 255, 255, 0.7)',
                  fontSize:10,
                }
              }
            },
            labelLine: {
              smooth: 0.1,
              length: 20,
              length2: 15,
              maxSurfaceAngle:80,
              lineStyle: {
                color: 'rgba(255,255,255,0.5)'
              }
            },
          }
        ]
      })
    }
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

.collapse-toggle {
  display: none;
}

.content {
  max-height: 0px;
  overflow: hidden;
  transition: 0.7s ease-in-out;
  background-color: rgba(196, 194, 194, 0.3);
  width: 100%;
  border-width: 0;
  box-shadow: inset 0px 5px 8px 0px rgba(18, 29, 29, 0.15),
    /*上边阴影  */ inset 0px 0px 0px 0px rgba(18, 29, 29, 0.25),
    /*左边阴影 */ inset 0px 0px 0px 0px rgba(18, 29, 29, 0.25),
    /*右边阴影  */ inset 0px -5px 5px 0px rgba(18, 29, 29, 0); /*下边阴影  */
}

.collapse-toggle:checked ~ .content {
  max-height: 600px;
}

.collapse-toggle:checked ~ label .el-icon-arrow-right {
  transform: rotate(90deg);
}

.collapse-toggle:not(:checked) ~ label .el-icon-arrow-right {
}

.collapse-card {
  padding: 15px;
}

.collapse-item {
  margin-top: 10px;
  border-radius: 10px;
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
  width: 95%;
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

.collapse-card li {
  list-style: none;
  color: white;
  width: 25%;
  height: 1em;
  float: left;
  text-decoration-color: white;

  margin-bottom: 10px;
  margin-top: 0px;
  font-size: 1em;
}

.collapse-card span {
  color: white;
  margin-bottom: 7px;
  line-height: 2em;
  margin-left: 40px;
  float: left;
}

.collapse-card select {
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

.collapse-card input {
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

.collapse-card textarea {
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
  font-family: "微软雅黑";
  color: white;
}

.search_menu{
  background-color: rgb(224, 224, 224);
  display: block;
  width:124px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.search_menu li {
  margin-top: 1px ;
  margin-bottom: 1px;
  text-indent: 2px;
  height: 25px;
  width: 100%;
  text-align: justify;
  resize: none;
  font-size: 1.1em;
  float: left;
  font-family: "微软雅黑 light";
  color: #3d3d3d;
  cursor: pointer;
}
.search_menu li:hover{
  color: dodgerblue;
  font-weight: bold;
}
.holder:hover .search_menu {
  display: block;
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
  margin-top: 20px;
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
