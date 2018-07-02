//
//  AppDelegate.m
//  dyyd
//
//  Created by beessoft on 2018/5/8.
//  Copyright © 2018年 beessoft. All rights reserved.
//

#import "AppDelegate.h"
#import <JSPatchPlatform/JSPatch.h>
@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
//    [JSPatch testScriptInBundle];
    [JSPatch startWithAppKey:@"fee30721b87ef38c"];
    [JSPatch setupRSAPublicKey:@"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr+OVsOM1BpZj4853vhE2\nAIzUWSiiE9+QASKhrxO4+OoKNfiFb9aNnTNlt8qmE/pwdJIiqC5WIrKJuiZAQFmq\nbb21IO5woDlPIMZOmftgjuBDwW4AlOUM4FS1SdBhZTw8ZnEnHSEpotgBsoRvPW4d\nrU2nUwGtwHkTw1sWjzxYp70U2WM3eW8JmJ9ogW9z6N8KO/ZskH+WXmAcFRPi0uLk\nRMcEyW0zcjrX/ebUAjmD61p1uXCpU74COmS5UX8g+qkkHN3TGgx21QNU0R/IMc2M\nm984RMEHJiEDUElivIBn8f02TD5hythAPoThz+ekTHAKh9wOQd0OZv/6qx/dIRC4\nYwIDAQAB\n-----END PUBLIC KEY-----"];
   
    
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
     [JSPatch sync];
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
