#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^LayoutCallback)(CGRect frame);

@interface ScreenSrollableContentWrapper : UIScrollView

@property (nonatomic, copy) LayoutCallback onLayout;

@end

NS_ASSUME_NONNULL_END
