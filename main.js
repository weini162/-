require("UILabel, NSString, UIFont, Tools, UILabel, NSString, UIFont, Tools, UILabel, NSString, UIFont, Tools, UILabel, NSString, UIFont, Tools, UIFont, Tools, NSMutableAttributedString, NSMutableParagraphStyle, UIScreen, NSString","DataEntryCusListTVC","ShopsCusListTVC");

var VIEW_HEIGHT_NEW = UIScreen.mainScreen().bounds().width;
defineClass('DataEntryTwoTVC', {
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            if (indexPath.section()==0) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "detwoCell")
            }
            var oneLabel = UILabel.alloc().initWithFrame({x:10, y:5, width:VIEW_HEIGHT_NEW-20, height:30}) ;
        oneLabel.setText(NSString.stringWithFormat("%@%@",self.tcModel().officeName(),self.tcModel().StreetName()) );
            oneLabel.setFont(UIFont.AvenirLightWithFontSize(14) );
            oneLabel.setTextColor(Tools.colorWithHexString("333333") );
            cell.contentView().addSubview(oneLabel) ;

            var twoLabel = UILabel.alloc().initWithFrame({x:10,y:35, width:VIEW_HEIGHT_NEW-20, height:30}) ;
            twoLabel.setText(NSString.stringWithFormat("所属：%@",self.tcModel().officeType()) );
            twoLabel.setFont(UIFont.AvenirLightWithFontSize(14) );
            twoLabel.setTextColor(Tools.colorWithHexString("333333") );
            cell.contentView().addSubview(twoLabel) ;
//
            var lederLabel = UILabel.alloc().initWithFrame({x:10,y:65,width:(VIEW_HEIGHT_NEW-20)/2, height:20});
            lederLabel.setText(NSString.stringWithFormat("归属人员：%@",self.tcModel().leader()) );
            lederLabel.setFont(UIFont.AvenirLightWithFontSize(14) );
            lederLabel.setTextColor(Tools.colorWithHexString("333333") );
            cell.contentView().addSubview(lederLabel) ;
//
            var userNameStr = UILabel.alloc().initWithFrame({x:10+(VIEW_HEIGHT_NEW-20)/2,y:65, width:(VIEW_HEIGHT_NEW-20)/2, height:20}) ;
            userNameStr.setText(NSString.stringWithFormat("SA人员：%@",self.tcModel().userName()) );
            userNameStr.setFont(UIFont.AvenirLightWithFontSize(14) );
            userNameStr.setTextColor(Tools.colorWithHexString("333333") );
            cell.contentView().addSubview(userNameStr) ;
//            cell.setSelectionStyle(UITableViewCellSelectionStyleNone);
            return cell;
            }else{
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "detwoCell")
            }
            var data = self.tcModel().modelList();
//            var jsonDIc = self.tcModel().modelList()[indexPath.row()];
            var jsonDIc = data.objectAtIndex(indexPath.row());
            var cellStr = NSString.stringWithFormat("类型：%@\n铺面间数：%@\n商户数量：%@",jsonDIc.objectForKey("className") ,jsonDIc.objectForKey("iNum") ,jsonDIc.objectForKey("cusNum")) ;
            cell.textLabel().setNumberOfLines(0);
            cell.textLabel().setFont(UIFont.AvenirLightWithFontSize(12) );
            cell.setAccessoryType(1);
            cell.textLabel().setTextColor(Tools.colorWithHexString("333333") );
            cell.textLabel().setText(cellStr);
            return cell;
            }
}}, {});


defineClass("DataEntryTwoTVC", {
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            if (indexPath.section() == 1) {
            var data = self.tcModel().modelList();
            //            var jsonDIc = self.tcModel().modelList()[indexPath.row()];
            var classDIc = data.objectAtIndex(indexPath.row());
            var deatt = DataEntryCusListTVC.alloc().init();
            deatt.setTitle(classDIc.objectForKey("className"));
            deatt.setTcModel(self.tcModel());
            deatt.setClassDIc(classDIc);
            self.navigationController().pushViewController_animated(deatt, YES);
            }
             tableView.deselectRowAtIndexPath_animated(indexPath, NO);
            }
            }, {});




defineClass('ShopsTVC', {
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            if (indexPath.section()==0) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "detwoCell")
            }
            var oneLabel = UILabel.alloc().initWithFrame({x:10, y:5, width:VIEW_HEIGHT_NEW-20, height:30}) ;
            oneLabel.setText(NSString.stringWithFormat("%@%@",self.tcModel().officeName(),self.tcModel().StreetName()) );
            oneLabel.setFont(UIFont.AvenirLightWithFontSize(14) );
            oneLabel.setTextColor(Tools.colorWithHexString("333333") );
            cell.contentView().addSubview(oneLabel) ;
            
            var twoLabel = UILabel.alloc().initWithFrame({x:10,y:35, width:VIEW_HEIGHT_NEW-20, height:30}) ;
            twoLabel.setText(NSString.stringWithFormat("所属：%@",self.tcModel().officeType()) );
            twoLabel.setFont(UIFont.AvenirLightWithFontSize(14) );
            twoLabel.setTextColor(Tools.colorWithHexString("333333") );
            cell.contentView().addSubview(twoLabel) ;
            //
            var lederLabel = UILabel.alloc().initWithFrame({x:10,y:65,width:(VIEW_HEIGHT_NEW-20)/2, height:20});
            lederLabel.setText(NSString.stringWithFormat("归属人员：%@",self.tcModel().leader()) );
            lederLabel.setFont(UIFont.AvenirLightWithFontSize(14) );
            lederLabel.setTextColor(Tools.colorWithHexString("333333") );
            cell.contentView().addSubview(lederLabel) ;
            //
            var userNameStr = UILabel.alloc().initWithFrame({x:10+(VIEW_HEIGHT_NEW-20)/2,y:65, width:(VIEW_HEIGHT_NEW-20)/2, height:20}) ;
            userNameStr.setText(NSString.stringWithFormat("SA人员：%@",self.tcModel().userName()) );
            userNameStr.setFont(UIFont.AvenirLightWithFontSize(14) );
            userNameStr.setTextColor(Tools.colorWithHexString("333333") );
            cell.contentView().addSubview(userNameStr) ;
            //            cell.setSelectionStyle(UITableViewCellSelectionStyleNone);
            return cell;
            }else{
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "detwoCell")
            }
            var data = self.tcModel().modelList();
            //            var jsonDIc = self.tcModel().modelList()[indexPath.row()];
            var jsonDIc = data.objectAtIndex(indexPath.row());
            var cellStr = NSString.stringWithFormat("类型：%@\n铺面间数：%@\n商户数量：%@",jsonDIc.objectForKey("className") ,jsonDIc.objectForKey("iNum") ,jsonDIc.objectForKey("cusNum")) ;
            cell.textLabel().setNumberOfLines(0);
            cell.textLabel().setFont(UIFont.AvenirLightWithFontSize(12) );
            cell.setAccessoryType(1);
            cell.textLabel().setTextColor(Tools.colorWithHexString("333333") );
            cell.textLabel().setText(cellStr);
            return cell;
            }
            }}, {});


defineClass("ShopsTVC", {
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            if (indexPath.section() == 1) {
            var data = self.tcModel().modelList();
            //            var jsonDIc = self.tcModel().modelList()[indexPath.row()];
            var classDIc = data.objectAtIndex(indexPath.row());
            var deatt = ShopsCusListTVC.alloc().init();
            deatt.setTitle(classDIc.objectForKey("className"));
            deatt.setTcModel(self.tcModel());
            deatt.setClassDIc(classDIc);
            self.navigationController().pushViewController_animated(deatt, YES);
            }
            tableView.deselectRowAtIndexPath_animated(indexPath, NO);
            }
            }, {});

