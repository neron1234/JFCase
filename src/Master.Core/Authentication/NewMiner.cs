﻿using Abp.AutoMapper;
using Master.Entity;
using Master.Module.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Master.Authentication
{
    [InterModule("审核新矿工")]
    [AutoMap(typeof(User))]
    public class NewMiner:BaseFullEntity
    {      
        public string OpenId { get; set; }
        
        [InterColumn(ColumnName = "微信头像",Templet = "<img class=\"thumb\" src=\"{{d.avata}}\" width=30 />",Sort =1)]
        public string Avata { get; set; }
        [InterColumn(ColumnName = "昵称",Sort =2)]
        public string NickName { get; set; }
        [InterColumn(ColumnName = "姓名",Sort =3)]
        public string Name { get; set; }
        [InterColumn(ColumnName = "律师事务所",Sort =4)]
        public string WorkLocation { get; set; }
        [InterColumn(ColumnName = "手机号码",Sort =5)]
        public string PhoneNumber { get; set; }
        [InterColumn(ColumnName = "邮箱",Sort =6)]
        public string Email { get; set; }
        /// <summary>
        /// 职业年限
        /// </summary>
        [InterColumn(ColumnName = "职业年限",Sort =7)]
        public int WorkYear { get; set; }
        /// <summary>
        /// 个人介绍
        /// </summary>
        public string Introduction { get; set; }
        [InterColumn(ColumnName = "申请时间",ColumnType =Module.ColumnTypes.DateTime,Sort =8)]
        public override DateTime CreationTime { get; set; }
        [InterColumn(ColumnName = "留言",Sort =9)]
        public override string Remarks { get; set; }
        public bool Verified { get; set; }
    }
}
