
# manual-xml

아이콘 애셋 assets 만들기 :  
http://romannurik.github.io/AndroidAssetStudio/index.html  

### RelativeLayout - TextView - Center
```
                <RelativeLayout
                    android:id="@+id/btn_task_a"
                    android:background="@drawable/border"
                    android:layout_width="0dp"
                    android:layout_height="match_parent"
                    android:layout_weight="0.2">

                    <TextView
                        android:id="@string/task_1"
                        style="@style/btn_text_medium"
                        android:layout_centerInParent="true"
                        android:text="@string/task_1" />

                </RelativeLayout>
```

### border_bottom.xml
```
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android" >

    <item
        android:bottom="1dp"
        android:left="-2dp"
        android:right="-2dp"
        android:top="-2dp">
        <shape android:shape="rectangle" >
            <stroke
                android:width="1dp"
                android:color="@color/black" />

            <solid android:color="#FFF" />
        </shape>
    </item>

</layer-list>

```

### custom style
1. TextView
```
<style name="Tab2TitleTextView" parent="@android:style/Widget.TextView">
    <item name="android:layout_height">wrap_content</item>
    <item name="android:layout_width">wrap_content</item>
    <item name="android:textColor">@color/black</item>
    <item name="android:layout_centerHorizontal">true</item>
    <item name="android:textSize">@dimen/text_large</item>
</style>
```

### include
```
            <include
                layout="@layout/main_content_search_edit"
                android:id="@+id/tab_3_searchedit"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_gravity="center_vertical"
                android:layout_margin="10dp"
                />
```

### emptyview

```
       <LinearLayout
                    android:id="@+id/view_empty"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_centerInParent="true"
                    android:orientation="vertical"
                 
                    >

                        <ProgressBar
                            android:layout_width="100dp"
                            android:layout_height="100dp" 
                            android:layout_gravity="center"
                            />

                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:gravity="center"
                            android:text="로딩중..."
                            android:textSize="@dimen/text_tablet_medium"
                            android:textColor="@color/white" />

                </LinearLayout>
```


### 특수문자
 ```
\
```
```
 &

 &amp;

 &#38;
 ```
```
 <

 &lt;

 &#60;
 ```
 ```
 >

 &gt;

 &#62;
 ```
  ```
 '

 &apos;

 &#39;
 ```
  ```
 "

 &quot;

 &#34; 
  ```

### copyright intro 
```
    <RelativeLayout
        android:id="@+id/intro_layout_bottom"
        android:layout_alignParentBottom="true"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginBottom="20dp"
        >

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginBottom="30dp"
            android:layout_marginLeft="20dp"
            android:layout_marginRight="20dp"
            android:layout_centerInParent="true"
            android:text="@string/intro_copyright"
            android:textColor="@color/white"
            android:textSize="@dimen/text_small"
            android:gravity="center"
            />

    </RelativeLayout>
```

### border.xml 사각테두리 
```
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android" >
 
    <item
        android:bottom="1dp"
        android:left="1dp"
        android:right="1dp"
        android:top="1dp">
        <shape android:shape="rectangle" >
            <stroke
                android:width="1dp"
                android:color="#dcdcdc" />
 
            <solid android:color="#FFF" />
        </shape>
    </item>
 
</layer-list>


출처: https://wimir-dev.tistory.com/44 [[위미르 개발팀] Android, iOS , Web 제작]
```

### rounded_border.xml (라운디드 버튼 보더)
```
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item>
        <shape android:shape="rectangle">
            <solid android:color="@color/white"/>
            <corners android:radius="10dp" />
            <stroke
                android:width="2dp"
                android:color="@color/colorPrimary"
                />
        </shape>
    </item>
</selector>
```

### 아이콘 metarial degisn icon
사이트 :  
https://material.io/tools/icons/  

### 파워영어 가로로 recyclerview 3개  
```

            <LinearLayout
                android:visibility="gone"
                android:orientation="vertical"
                android:id="@+id/tab3_upper_recycler_2_layout"
                android:layout_width="match_parent"
                android:layout_height="match_parent">

                <RelativeLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content">

                    <TextView
                        android:layout_marginLeft="10dp"
                        android:layout_marginTop="20dp"
                        android:textSize="@dimen/text_large"
                        android:id="@+id/tab3_upper_menu_2_text_2"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="@string/tab_3_upper_2_menu_2"
                        android:textColor="@color/white"
                        android:layout_alignParentTop="true"
                        />

                    <android.support.v7.widget.RecyclerView
                        android:layout_below="@+id/tab3_upper_menu_2_text_2"
                        android:id="@+id/tab3_upper_menu_2_recycler_2"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content" />

                </RelativeLayout>

            <RelativeLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content">

                <TextView
                    android:layout_marginLeft="10dp"
                    android:layout_marginTop="20dp"
                    android:textSize="@dimen/text_large"
                    android:id="@+id/tab3_upper_menu_2_text_3"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="@string/tab_3_upper_2_menu_3"
                    android:textColor="@color/white"
                    android:layout_alignParentTop="true"
                    />

                <android.support.v7.widget.RecyclerView
                    android:id="@+id/tab3_upper_menu_2_recycler_3"
                    android:layout_below="@+id/tab3_upper_menu_2_text_3"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content" />

            </RelativeLayout>

            <RelativeLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"

                >

                <TextView
                    android:layout_marginLeft="10dp"
                    android:layout_marginTop="20dp"
                    android:textSize="@dimen/text_large"
                    android:id="@+id/tab3_upper_menu_2_text_4"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="@string/tab_3_upper_2_menu_4"
                    android:textColor="@color/white"
                    android:layout_alignParentTop="true"
                    />

                <android.support.v7.widget.RecyclerView
                    android:id="@+id/tab3_upper_menu_2_recycler_4"
                    android:layout_below="@+id/tab3_upper_menu_2_text_4"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content" />

            </RelativeLayout>


            </LinearLayout>
```

### gradient_bg1.xml (그레디언트, 그래디언트)

사이트 :
https://uigradients.com/#Flare  

```
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle"
    >

    <gradient
        android:startColor="#00c6ff"
        android:endColor="#0072ff"
        android:angle="270"
        android:type="linear"
        ></gradient>
</shape>
```

